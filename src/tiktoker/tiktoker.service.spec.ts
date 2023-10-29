import { Test, TestingModule } from '@nestjs/testing';
import { TiktokerService } from './tiktoker.service';

describe('TiktokerService', () => {
  let service: TiktokerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TiktokerService],
    }).compile();

    service = module.get<TiktokerService>(TiktokerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
