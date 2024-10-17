import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  price: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  image?: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  description: string;
}