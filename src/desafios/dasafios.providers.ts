import { Connection } from 'mongoose';
import { DesafiosSchema } from './schema/dafios.schema';

export const desafiosProviders = [
  {
    provide: 'DESAFIOS_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Desafios', DesafiosSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
