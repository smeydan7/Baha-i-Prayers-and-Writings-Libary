
import { Module } from '@nestjs/common';
import { BahaiService } from './test.service';
import { BahaiController } from './test.controller';

@Module({
  controllers: [BahaiController],
  providers: [BahaiService],
})
export class BahaiModule {}