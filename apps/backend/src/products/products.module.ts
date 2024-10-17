import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { DatabaseModule } from '../database/database.module';
import { ProductsDao } from './dao/products.dao';
import { productProviders } from './products.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductsController],
  providers: [ProductsService, ProductsDao, ...productProviders],
})
export class ProductsModule {}
