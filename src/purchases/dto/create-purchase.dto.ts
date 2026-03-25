import { IsNumber, IsString, IsNotEmpty } from 'class-validator';

export class CreatePurchaseDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsNotEmpty()
  @IsString()
  customerName: string;

  @IsNotEmpty()
  @IsString()
  purchaseDate: string;

  @IsNotEmpty()
  @IsNumber()
    items: [
        { productId: number, quantity: number, price: number },
        { productId: number, quantity: number, price: number }
    ]

  @IsNotEmpty()
  @IsNumber()
  totalPrice: number;
}
