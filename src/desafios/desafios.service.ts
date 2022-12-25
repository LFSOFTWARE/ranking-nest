import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { CreateDesafioDto } from './dto/create-desafio.dto';
import { UpdateDesafioDto } from './dto/update-desafio.dto';
import { Desafios } from './interface/dasafios.interface';
import { JogadoresService } from 'src/jogadores/jogadores.service';
import {
  BadRequestException,
  NotFoundException,
} from '@nestjs/common/exceptions';
import { CategoriasService } from 'src/categorias/categorias.service';
import { DesafiosStaus } from './enum/dafios-status.enum';

@Injectable()
export class DesafiosService {
  constructor(
    @Inject('DESAFIOS_MODEL') private desafiosModel: Model<Desafios>,
    private jogadoresService: JogadoresService,
    private categoriasService: CategoriasService,
  ) {}

  async create(createDesafioDto: CreateDesafioDto) {
    const { solicitante, jogadores, dataHoraDesafio } = createDesafioDto;

    if (new Date(dataHoraDesafio) < new Date()) {
      throw new BadRequestException(
        'The date of chalenge mus be more than current date',
      );
    }
    //Verifica se os Jogadores Existem

    for (let index = 0; index < jogadores.length; index++) {
      const id = jogadores[index];
      await this.jogadoresService.findById(id as unknown as string);
    }

    const solicitanteIsParticipant = jogadores.find(
      (element: any) => element === solicitante,
    );

    if (!solicitanteIsParticipant) {
      throw new BadRequestException(
        `The user solicitante ${solicitante} need be a participant of challenge `,
      );
    }

    //Verifica se o solicitante pertence a uma categoria

    const categoryUser = await this.categoriasService.findCategoryByIdJogador(
      solicitante,
    );

    const desafioNew = new this.desafiosModel(createDesafioDto);

    desafioNew.dataHoraSolicitacao = new Date();
    desafioNew.categoria = categoryUser[0];
    desafioNew.status = DesafiosStaus.PENDENDTE;

    desafioNew.save();
  }

  async findAll(): Promise<Array<Desafios>> {
    return await this.desafiosModel
      .find()
      .populate('jogadores')
      .populate('solicitante')
      .populate('categoria')
      .populate('partida');
  }

  async findOne(id: string): Promise<Desafios> {
    return await this.desafiosModel.findById({ _id: id });
  }

  async consultarDesafiosDeUmJogador(playerID: string) {
    return await this.desafiosModel
      .find()
      .where('jogadores')
      .in(playerID as unknown as any);
  }
  async update(id: string, updateDesafioDto: UpdateDesafioDto) {
    const { status } = updateDesafioDto;
    const aceptStatus = ['ACEITO', 'NEGADO', 'CANCELADO'];

    const chalangeFind = this.desafiosModel.findOne({ _id: id });

    if (!chalangeFind) {
      throw new NotFoundException(`Desafio ${id} not found`);
    }

    const statusIsValid = aceptStatus.find((s) => s === status);

    if (!statusIsValid && status !== undefined) {
      throw new BadRequestException(`Status ${status} is not avalabre`);
    }
    await this.desafiosModel.findOneAndUpdate(
      { _id: id },
      { $set: updateDesafioDto },
    );
  }

  async remove(id: string) {
    const chalangeFind = this.desafiosModel.findOne({ _id: id });

    if (!chalangeFind) {
      throw new NotFoundException(`Desafio ${id} not found`);
    }

    await this.desafiosModel.findOneAndUpdate(
      { _id: id },
      { $set: { status: 'CANCELADO' } },
    );
  }
}
