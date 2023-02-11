import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { CreatePartidaDto } from './dto/create-partida.dto';
import { UpdatePartidaDto } from './dto/update-partida.dto';
import { Inject } from '@nestjs/common/decorators';
import { Partida } from 'src/desafios/interface/dasafios.interface';

@Injectable()
export class PartidasService {
  constructor(
    @Inject('PARTIDAS_MODEL')
    private partidaService: Model<Partida>,
  ) {}

  create(createPartidaDto: CreatePartidaDto) {
    return this.partidaService.create(createPartidaDto);
  }

  findAll() {
    return this.partidaService.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} partida`;
  }

  update(id: number, updatePartidaDto: UpdatePartidaDto) {
    return `This action updates a #${id} partida`;
  }

  remove(id: number) {
    return `This action removes a #${id} partida`;
  }

  criar(obgj: any) {
    return new this.partidaService(obgj);
  }
}
