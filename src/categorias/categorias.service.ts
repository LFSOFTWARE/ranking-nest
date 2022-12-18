import { JogadoresService } from 'src/jogadores/jogadores.service';
import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { Model } from 'mongoose';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { Categoria } from './interface/categoria.interface';

@Injectable()
export class CategoriasService {
  constructor(
    @Inject('CATEGORIA_MODEL')
    private categoriaModel: Model<Categoria>,
    private jogadorModel: JogadoresService,
  ) {}

  async create(createCategoriaDto: CreateCategoriaDto) {
    const { categoria } = createCategoriaDto;

    const existingCategoria = await this.categoriaModel.findOne({ categoria });

    if (existingCategoria) {
      throw new BadRequestException(`Categoria ${categoria} already exists`);
    }

    const newCategoria = new this.categoriaModel(createCategoriaDto);
    return newCategoria.save();
  }

  async findAll(): Promise<Array<Categoria>> {
    return this.categoriaModel.find().populate('jogadores');
  }

  async findOne(categoria: string): Promise<Categoria> {
    const categoryFind = await this.categoriaModel
      .findOne({ categoria })
      .populate('jogadores');

    if (!categoryFind) {
      throw new NotFoundException(`Categoria ${categoria} not found`);
    }
    return categoryFind;
  }

  async update(
    categoria: string,
    updateCategoriaDto: UpdateCategoriaDto,
  ): Promise<void> {
    const categoryFind = await this.categoriaModel.findOne({ categoria });

    if (!categoryFind) {
      throw new NotFoundException(`Categoria ${categoria} not found`);
    }

    await this.categoriaModel.findOneAndUpdate(
      { categoria },
      { $set: updateCategoriaDto },
    );
  }

  async atribuirJogador(params: string[]): Promise<void> {
    const categoria = params['categoria'];
    const idJogador = params['idJogador'];

    const categoryFind = await this.categoriaModel.findOne({ categoria });
    const jogadorHasCategory = await this.categoriaModel
      .find({ categoria })
      .where('jogadores')
      .in(idJogador);

    await this.jogadorModel.findById(idJogador);

    if (jogadorHasCategory.length > 0) {
      throw new BadRequestException(
        `Jogador  ${idJogador} ja registrado na categoria ${categoria}`,
      );
    }

    if (!categoryFind) {
      throw new BadRequestException(`Categoria ${categoria} not created`);
    }
    categoryFind.jogadores.push(idJogador);

    await this.categoriaModel.findOneAndUpdate(
      { categoria },
      { $set: categoryFind },
    );
  }

  async findCategoryByIdJogador(id: any): Promise<any> {
    const jogadorHasCategory = await this.categoriaModel
      .find()
      .where('jogadores')
      .in(id);
    if (jogadorHasCategory.length === 0) {
      throw new NotFoundException(
        `Jogador nao cadastrado ${id}  em nenhuma categoria`,
      );
    }
    return jogadorHasCategory;
  }
  remove(id: number) {
    return `This action removes a #${id} categoria`;
  }
}
