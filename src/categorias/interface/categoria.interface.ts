import { Document } from 'mongoose';

export interface Categoria extends Document {
  readonly Categoria: string;
  descricao: string;
  eventos: Array<Evento>;
}

export interface Evento {
  nome: string;
  operacion: string;
  valor: number;
}
