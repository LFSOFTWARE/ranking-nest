import mongoose from 'mongoose';

export const PartidasSchema = new mongoose.Schema(
  {
    def: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Jogadores' }],
    jogadores: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Jogadores' }],
    resultado: [
      {
        set: String,
      },
    ],
  },
  { timestamps: true, collection: 'Partidas' },
);
