import { Test, TestingModule } from '@nestjs/testing';
import { TiktokerController } from './tiktoker.controller';
import { TiktokerService } from './tiktoker.service';

describe('TiktokerController', () => {
  let controller: TiktokerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TiktokerController],
      providers: [TiktokerService],
    }).compile();

    controller = module.get<TiktokerController>(TiktokerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
