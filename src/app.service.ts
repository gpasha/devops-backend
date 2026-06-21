import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hi from a new VDS!!! Version 3 (week4)';
  }
}
