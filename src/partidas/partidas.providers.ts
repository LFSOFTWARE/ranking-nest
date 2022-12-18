import { Connection } from 'mongoose';
import { PartidasSchema } from './schemas/partidas.schema';

export const partidasProviders = [
  {
    provide: 'PARTIDAS_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Partidas', PartidasSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
