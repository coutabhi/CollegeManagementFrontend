import { Component, OnInit } from '@angular/core';
import { InsertService } from 'src/app/insert.service';
import { Book } from '../Book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  book: Book = {
    title: '',
    author: '',
    genre: '',
    isbn: ''
  };

  ngOnInit(): void {
      
  }

  constructor(private bookService: InsertService, private router: Router) {}

  onSubmit(): void {
    this.bookService.addBook(this.book)
      .subscribe(() => {
        console.log('Book added successfully');
        this.router.navigateByUrl("/libdash");
      });
  }

}
