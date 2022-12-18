import mongoose from 'mongoose';

export const DesafiosSchema = new mongoose.Schema(
  {
    dataHoraDesafio: Date,
    status: String,
    dataHoraSolicitacao: Date,
    dataHoraResposta: Date,
    solicitante: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Jogadores' }],
    categoria: { type: mongoose.Schema.Types.ObjectId, ref: 'Categorias' },
    jogadores: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Jogadores' }],
    partida: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Partida',
    },
  },
  { timestamps: true, collection: 'Desafios' },
);
