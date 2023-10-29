import { Module } from '@nestjs/common';
import { TiktokerService } from './tiktoker.service';
import { TiktokerController } from './tiktoker.controller';

@Module({
  controllers: [TiktokerController],
  providers: [TiktokerService]
})
export class TiktokerModule {}
