import { Controller, Get } from '@nestjs/common';
import { PurchaseService } from './purchase.service';
import { Purchase } from './purchase.interface';

@Controller()
export class PurchaseController {
  constructor(private readonly PurchaseService: PurchaseService) {}

  @Get()
  findAll(): Purchase[] {
    return this.PurchaseService.findAll();
  }
}
