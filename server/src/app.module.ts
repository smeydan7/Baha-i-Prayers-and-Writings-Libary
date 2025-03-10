import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BahaiModule } from './test/test.module';

@Module({
  imports: [BahaiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
