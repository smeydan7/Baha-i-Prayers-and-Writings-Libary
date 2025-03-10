
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class BahaiService {
  private readonly API_BASE_URL = 'https://BahaiPrayers.net/api';

  async getLanguages(): Promise<any> {
    const response = await fetch(`${this.API_BASE_URL}/ai/languages`);
    if (!response.ok) {
      throw new HttpException('Failed to fetch languages', HttpStatus.BAD_REQUEST);
    }
    return response.json();
  }
}