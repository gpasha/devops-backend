import { Injectable, OnApplicationBootstrap } from '@nestjs/common';

@Injectable()
export class ReadinessService implements OnApplicationBootstrap {
  private ready = false;

  onApplicationBootstrap() {
    // имитация долгой инициализации (прогрев кэша, подключение к БД и т.п.)
    setTimeout(() => {
      this.ready = true;
    }, 10000);
  }

  isReady(): boolean {
    return this.ready;
  }

  setIsReady(value: boolean) {
    this.ready = value;
  }

  setHealth() {
    while (true) {
      console.log('working');
    }
  }
}
