import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { CreateJogadoreDto } from './dto/create-jogadore.dto';
import { Jogador } from './interfaces/jogadores.interface';
import { Model } from 'mongoose';
import { UpdateJogadoreDto } from './dto/update-jogadore.dto';

@Injectable()
export class JogadoresService {
  constructor(
    @Inject('JOGADORES_MODEL')
    private jogadorModel: Model<Jogador>,
  ) {}

  async create(createJogadoreDto: CreateJogadoreDto): Promise<Jogador> {
    const { email } = createJogadoreDto;

    const findUser = await this.jogadorModel.findOne({ email });
    if (findUser) {
      throw new BadRequestException(' email is in use ' + email);
    }
    const newUser = new this.jogadorModel(createJogadoreDto);
    return await newUser.save();
  }

  async update(
    createJogadoreDto: UpdateJogadoreDto,
    _id: string,
  ): Promise<void> {
    const findUser = await this.jogadorModel.findOne({ _id });

    if (!findUser) {
      throw new BadRequestException('usuario não cadastrado ' + _id);
    }

    return await this.jogadorModel.findOneAndUpdate(
      { _id },
      { $set: createJogadoreDto },
    );
  }

  async findById(_id: string): Promise<Jogador> {
    const jogadorFind = await this.jogadorModel.findOne({ _id });
    if (!jogadorFind) {
      throw new NotFoundException('id not found ' + _id);
    }
    return jogadorFind;
  }

  async findAll() {
    return await this.jogadorModel.find();
  }

  async remove(_id: string) {
    try {
      const jogadorFind = await this.jogadorModel.findOne({ _id });

      if (!jogadorFind) {
        throw new NotFoundException('id not found ' + _id);
      }
    } catch (error) {
      throw new NotFoundException('id not found ' + _id);
    }

    return await this.jogadorModel.deleteOne({ _id });
  }
}
