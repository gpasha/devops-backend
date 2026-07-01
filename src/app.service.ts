import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hi from a new VDS!!! A new version from week5!';
  }
}
