import { Controller, Get } from '@nestjs/common';
import { DataService } from './data.service'; // Import the service

@Controller('data')
export class DataController {
  // Constructor injection: NestJS will inject an instance of DataService here
  constructor(private readonly dataService: DataService) {}

  @Get()
  fetchAllData(): string[] {
    return this.dataService.getRecords(); // Use the injected service
  }
}
