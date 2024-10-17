import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';
import { IProduct } from '../interface/product.interface';
import constants from '../../constants';
import { CreateProductDto } from '../dto/create-product.dto';
import { GetProductDto } from '../dto/get-product.dto';

@Injectable()
export class ProductsDao {
    constructor(@Inject(constants.PRODUCT_MODEL) private productModel: Model<IProduct>) {}

    async createProduct(createProductDto: CreateProductDto): Promise<GetProductDto> {
        const createdProduct = new this.productModel(createProductDto);
        const savedProduct = await createdProduct.save();
        return this.mapToGetProductDto(savedProduct);
      }
    
      async getProductById(id: string): Promise<GetProductDto | null> {
        const product = await this.productModel.findById(id).exec();
        return product ? this.mapToGetProductDto(product) : null;
      }
    
      async getAllProducts(): Promise<GetProductDto[]> {
        const products = await this.productModel.find().exec();
        return products.map(product => this.mapToGetProductDto(product));
      }
    
      private mapToGetProductDto(product: IProduct): GetProductDto {
        return {
          id: product._id.toString(),
          name: product.name,
          price: product.price,
          image: product.image,
          description: product.description,
          createdAt: product.createdAt,
          updatedAt: product.updatedAt,
        };
      }
}