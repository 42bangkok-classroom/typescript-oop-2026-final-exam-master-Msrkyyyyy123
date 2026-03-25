import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
    controllers: [ProductController],
    providers: [ProductService],
    exports: [ProductService],
  })
  export class ProductModule {}
