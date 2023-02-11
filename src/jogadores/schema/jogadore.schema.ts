import mongoose from 'mongoose';
import { Document } from 'mongoose';
export type JogadorDocument = Jogador & Document;

export class Jogador {
  _id: string;
  phoneNumber: string;
  email: string;
  name: string;
  ranking: string;
  positionRanking: number;
  urlFotoJogador: string;
}

export const JogadorSchema = new mongoose.Schema(
  {
    phoneNumber: { type: String },
    email: { type: String, unique: true },
    name: String,
    ranking: String,
    positionRanking: Number,
    urlFotoJogador: String,
  },
  { timestamps: true, collection: 'jogadores' },
);

export const JogadorModel = mongoose.model('Jogadores', JogadorSchema);
