import { Connection } from 'mongoose';
import { PartidasSchema } from 'src/partidas/schemas/partidas.schema';
import { DesafiosSchema } from './schema/dafios.schema';

export const desafiosProviders = [
  {
    provide: 'DESAFIOS_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Desafios', DesafiosSchema),
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'PARTIDA_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Partidas', PartidasSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
