import { Injectable } from '@nestjs/common';
import { Purchase } from './purchase.interface';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class PurchaseService {
  findAll(): Purchase[] {
    const filePath = path.join(process.cwd(), 'data', 'users.json');
    const rawData = fs.readFileSync(filePath, 'utf8');
    const parsedData: unknown = JSON.parse(rawData);
    return parsedData as Purchase[];
  }
}
