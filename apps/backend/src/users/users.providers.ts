import { Connection } from 'mongoose';
import constants from '../constants';
import { UserSchema } from './schema/user.schema';

export const userProviders = [
  {
    provide: constants.USER_MODEL,
    useFactory: (connection: Connection) =>
      connection.model('user', UserSchema),
    inject: [constants.DATABASE_CONNECTION],
  }
];