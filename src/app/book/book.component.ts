import { Component, OnInit } from '@angular/core';
import { Book } from './Book';
import { InsertService } from '../insert.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books: Book[] = [];
  selectedBook: Book | null = null;

  constructor(private bookService: InsertService) {}

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks(): void {
    this.bookService.getAllBooks()
      .subscribe(books => this.books = books);
  }

  updateBookForm(book: Book): void {
    this.selectedBook = { ...book }; // Clone the book object to avoid changing the original book
  }

  updateBook(): void {
    if (!this.selectedBook || this.selectedBook.id === undefined) {
      console.error("Selected book or its ID is undefined.");
      return;
    }
  
    this.bookService.updateBook(this.selectedBook.id, this.selectedBook)
      .subscribe(() => {
        console.log('Book updated successfully');
        this.getAllBooks(); // Refresh the book list after updating
        this.selectedBook = null; // Clear selectedBook after update
      });
  }
  

  deleteBook(id: number): void {
    if (id === undefined) {
      console.error("Book ID is undefined.");
      return;
    }
  
    this.bookService.deleteBook(id)
      .subscribe(() => {
        console.log(`Book with ID ${id} deleted successfully`);
        this.getAllBooks(); // Refresh the book list after deletion
      });
  }
  
}
