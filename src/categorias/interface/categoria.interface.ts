import { Document } from 'mongoose';
import { Jogador } from 'src/jogadores/interfaces/jogadores.interface';

export interface Categoria extends Document {
  readonly Categoria: string;
  descricao: string;
  eventos: Array<Evento>;
  jogadores: Array<Jogador>;
}

export interface Evento {
  nome: string;
  operacion: string;
  valor: number;
}
