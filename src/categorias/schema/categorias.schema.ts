import mongoose from 'mongoose';

export const CategoriasSchema = new mongoose.Schema(
  {
    caategoria: { type: String, unique: true },
    descricao: String,
    eventos: [
      {
        nome: String,
        operacion: String,
        valor: Number,
      },
    ],
    jogadores: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Jogadores' }],
  },
  { timestamps: true, collection: 'Categorias' },
);
