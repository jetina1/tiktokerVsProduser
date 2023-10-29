import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PackageModule } from './package/package.module';
import { TiktokerModule } from './tiktoker/tiktoker.module';
import { AdminModule } from './admin/admin.module';
import { ProducerModule } from './producer/producer.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [PackageModule, TiktokerModule, AdminModule, ProducerModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
