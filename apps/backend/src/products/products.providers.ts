import { Connection } from 'mongoose';
import constants from '../constants';
import { ProductSchema } from './schema/products.schema';

export const productProviders = [
  {
    provide: constants.PRODUCT_MODEL,
    useFactory: (connection: Connection) =>
      connection.model('product', ProductSchema),
    inject: [constants.DATABASE_CONNECTION],
  }
];