import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('greetings')
export class GreetingsController {
  @Get() // Handles GET requests to /greetings
  getGreeting(): string {
    return 'Hello, world from NestJS!';
  }

  @Get(':name') // Handles GET requests to /greetings/some-name
  // e.g., /greetings/Alice
  getPersonalizedGreeting(@Param('name') name: string): string {
    return `Hello, ${name}!`;
  }

  @Post() // Handles POST requests to /greetings
  createGreeting(@Body() messageDto: { message: string }): string {
    return `You sent: ${messageDto.message}. Greeting created!`;
  }
}
