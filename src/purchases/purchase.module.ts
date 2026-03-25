import { Module } from '@nestjs/common';
// import { APP_FILTER } from '@nestjs/core';
import { PurchaseController } from './purchase.controller';
import { PurchaseService } from './purchase.service';

@Module({
  controllers: [PurchaseController],
  providers: [PurchaseService],
  exports: [PurchaseService],
})
export class ProductModule {}
