import { Injectable } from '@nestjs/common';
import { Book } from './book.interface';

@Injectable()
export class BookService {
  private readonly books: Book[] = [
    { id: 1, book: 'Book A' },
    { id: 2, book: 'Book B' },
  ];

  getBooks(): Book[] {
    return this.books;
  }

  getBookById(id: string): Book {
    const book = this.books.find((book) => book.id === Number(id));
    if (!book) {
      throw new Error(`Book with ID ${id} not found`);
    }
    return book;
  }

  createBook(createBookDto: Book): Book {
    const newBook: Book = {
      id: Number(createBookDto.id),
      book: createBookDto.book,
    };
    this.books.push(newBook);
    return newBook;
  }
}
