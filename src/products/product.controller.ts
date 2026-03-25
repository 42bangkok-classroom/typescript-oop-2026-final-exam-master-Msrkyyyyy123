import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.interface';

@Controller()
export class ProductController {
  constructor(private readonly ProductService: ProductService) {}

  @Get()
  findAll(): Product[] {
    return this.ProductService.findAll();
  }
}
