import { Document } from 'mongoose';
import { Jogador } from 'src/jogadores/schema/jogadore.schema';

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
