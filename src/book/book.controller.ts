import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './book.interface';
import { CreateBookDto } from './dto/create-book.dto';

@UsePipes(new ValidationPipe({ transform: true }))
@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  getBooks(): Book[] {
    return this.bookService.getBooks();
  }

  @Get(':id')
  getBookById(@Param('id') id: string): Book {
    return this.bookService.getBookById(id);
  }

  @Post()
  createBook(@Body() createBookDto: CreateBookDto) {
    return this.bookService.createBook(createBookDto);
  }
}
