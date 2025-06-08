import { Injectable } from '@nestjs/common';

@Injectable()
export class DataService {
  private readonly records: string[] = ['Record A', 'Record B'];

  getRecords(): string[] {
    return this.records;
  }
}
