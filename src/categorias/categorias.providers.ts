import { Connection } from 'mongoose';
import { CategoriasSchema } from './schema/categorias.schema';

export const categoriaProviders = [
  {
    provide: 'CATEGORIA_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Categorias', CategoriasSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
