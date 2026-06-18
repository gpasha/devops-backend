import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hi from a new VDS!"', () => {
      if (process.version.startsWith('v24')) {
        throw new Error("Node.js should be < 24")
      }
      expect(appController.getHello()).toBe('Hi from a new VDS!');
    });
  });
});
