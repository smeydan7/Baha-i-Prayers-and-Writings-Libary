import { Controller, Get } from '@nestjs/common';
import { BahaiService } from '../test/test.service';

@Controller('bahai')
export class BahaiController {
  constructor(private readonly bahaiService: BahaiService) {}

  @Get('languages')
  async getLanguages() {
    return await this.bahaiService.getLanguages();
  }
}