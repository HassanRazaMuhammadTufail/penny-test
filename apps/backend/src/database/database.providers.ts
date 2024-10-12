import * as mongoose from 'mongoose';
import constants from '../constants';

export const databaseProviders = [
  {
    provide: constants.DATABASE_CONNECTION,
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        `mongodb+srv://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@${process.env.MONGO_INITDB_HOST}/${process.env.MONGO_INITDB_DATABASE}?retryWrites=true&w=majority&appName=${process.env.MONGO_INITDB_CLUSTER}`,
      ),
  },
];