import { Connection } from 'mongoose';
import { JogadorSchema } from './schema/jogadore.schema';

export const jogadoresProviders = [
  {
    provide: 'JOGADORES_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Jogadores', JogadorSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
