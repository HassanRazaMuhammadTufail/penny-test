export class GetProductDto {
    id: string;
    name: string;
    price: string;
    image?: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
  }