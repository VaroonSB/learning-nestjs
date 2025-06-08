import { Module } from '@nestjs/common';
import { GreetingsController } from './greetings.controller';

@Module({
  controllers: [GreetingsController],
})
export class GreetingsModule {}
