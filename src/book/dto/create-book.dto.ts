import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBookDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsString()
  book: string;
}
