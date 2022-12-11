import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        `mongodb+srv://admin123:admin123@cluster0.3cxrdod.mongodb.net/?retryWrites=true&w=majority`,
      ),
  },
];
