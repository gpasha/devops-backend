import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  ParseBoolPipe,
  Query,
} from '@nestjs/common';
import { ReadinessService } from './readiness.service';

@Controller('app')
export class HealthController {
  constructor(private readonly readinessService: ReadinessService) {}

  @Get('/health')
  health(): string {
    return 'success';
  }

  @Get('/ready')
  ready(): string {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    if (!this.readinessService.isReady()) {
      throw new HttpException('not ready', HttpStatus.SERVICE_UNAVAILABLE); // 503
    }
    return 'success';
  }
  @Get('/set-ready')
  setIsReady(@Query('isReady', ParseBoolPipe) isReady: boolean) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    this.readinessService.setIsReady(isReady);
  }

  @Get('/set-health')
  setHealth() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    this.readinessService.setHealth();
  }
}
