import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { CreateDesafioDto } from './dto/create-desafio.dto';
import { UpdateDesafioDto } from './dto/update-desafio.dto';
import { Desafios } from './interface/dasafios.interface';

@Injectable()
export class DesafiosService {
  constructor(
    @Inject('DESAFIOS_MODEL') private desafiosModel: Model<Desafios>,
  ) {}

  create(createDesafioDto: CreateDesafioDto) {
    return 'This action adds a new desafio';
  }

  findAll() {
    return `This action returns all desafios`;
  }

  findOne(id: number) {
    return `This action returns a #${id} desafio`;
  }

  update(id: number, updateDesafioDto: UpdateDesafioDto) {
    return `This action updates a #${id} desafio`;
  }

  remove(id: number) {
    return `This action removes a #${id} desafio`;
  }
}
