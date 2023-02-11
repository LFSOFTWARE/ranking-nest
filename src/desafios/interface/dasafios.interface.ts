import { Document } from 'mongoose';
import { Jogador } from 'src/jogadores/schema/jogadore.schema';
import { DesafiosStaus } from '../enum/dafios-status.enum';
import { Categoria } from './../../categorias/interface/categoria.interface';

export interface Desafios extends Document {
  dataHoraDesafio: Date;
  status: DesafiosStaus;
  dataHoraSolicitacao: Date;
  dataHoraResposta: Date;
  solicitante: Jogador;
  categoria: Categoria;
  jogadores: Array<Jogador>;
  partida: Array<Partida>;
}

export interface Partida extends Document {
  def: Jogador;
  resultado: Array<Resultado>;
  jogadores: Array<Jogador>;
  categoria: Categoria;
}

export interface Resultado {
  set: string;
}
