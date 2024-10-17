import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { GetProductDto } from './dto/get-product.dto';
import { ProductsDao } from './dao/products.dao';

@Injectable()
export class ProductsService {
  constructor(private readonly productDao: ProductsDao) {}
  async createProduct(createProductDto: CreateProductDto): Promise<GetProductDto> {
    return this.productDao.createProduct(createProductDto);
  }

  async getProductById(id: string): Promise<GetProductDto> {
    const product = await this.productDao.getProductById(id);
    if (!product) {
      throw new NotFoundException(`Product with ID "${id}" not found`);
    }
    return product;
  }

  async getAllProducts(): Promise<GetProductDto[]> {
    return this.productDao.getAllProducts();
  }
}
