import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from 'src/app/book/Book';
import { BookAssignment } from 'src/app/book/BookAssignment';
import { InsertService } from 'src/app/insert.service';
import { Student } from 'src/app/student/Student';

@Component({
  selector: 'app-lib-dash',
  templateUrl: './lib-dash.component.html',
  styleUrls: ['./lib-dash.component.css']
})
export class LibDashComponent implements OnInit {

  bookAssignmentForm!: FormGroup;
  books!: Book[];
  students!: any[];
  assignedBooks: BookAssignment[] = [];


  selectedFaculty: any;

  constructor(private formBuilder: FormBuilder, private is: InsertService, private ps1: InsertService, private ps: InsertService, private router: Router) {

    this.viewLoginpage();
  }

  ngOnInit(): void {
    this.initForm();
    this.getBooks();
    this.getStudents();
    this.getAssignedBooks();
  }

  initForm(): void {
    this.bookAssignmentForm = this.formBuilder.group({
      bookId: ['', Validators.required],
      studentId: ['', Validators.required]
    });
  }

  getAssignedBooks(): void {
    this.is.getAllBookAssignments().subscribe(books => {
      this.assignedBooks = books;
      console.log("These are the assigned books", this.assignedBooks)
    });
  }

  deleteAssignedBook(bookAssignmentId: number): void {
    this.is.deleteBookAssignment(bookAssignmentId).subscribe(() => {
      this.assignedBooks = this.assignedBooks.filter(book => book.id !== bookAssignmentId);
    });
  }

  getBooks(): void {
    this.is.getAllBooks().subscribe(books => this.books = books);
    console.log("these are the books ", this.books);
  }

  getStudents(): void {
    this.is.viewStudent().subscribe((students: any) => {
      this.students = students;
      console.log("these are the students...", this.students);
      console.log("these are the books ", this.books[1]);
    });
  }




  onSubmit(): void {
    if (this.bookAssignmentForm.valid) {
      const bookId = this.bookAssignmentForm.value.bookId;
      const studentId = this.bookAssignmentForm.value.studentId;
      this.is.assignBookToStudent(bookId, studentId).subscribe(() => {
        alert('Book assigned successfully');
        this.bookAssignmentForm.reset();
      });
    }
  }


  insertdetails(insert: any) {
    this.is.addMEFaculties(insert.value).subscribe();
    alert('You Have successfully added faculty data');
    window.location.reload();
  }

  loginpage: any;
  updateLoginpage(data: any) {
    this.ps1.updateMEFaculties(data.value).subscribe();
    alert('You Have successfully updated faculty data');
    window.location.reload();
  }

  deleteLoginpage(data: any) {
    const bookId = data.value.id; // Extract the book id from the form
    this.ps.deleteBook(bookId).subscribe(() => {
      alert('You have successfully deleted the book');
      this.router.navigateByUrl('/libdash');
    }, error => {
      console.error('Error deleting book:', error);
      // Handle error if needed
    });
  }

  loginpages: any;
  viewLoginpage() {
    this.is.viewMEFaculties().subscribe((resp1: any) => { this.loginpages = resp1; });
  }

  div1: boolean = true;
  div2: boolean = false;
  div3: boolean = false;
  div4: boolean = false;
  div6: boolean = false;
  div7: boolean = false;
  div8: boolean = false;

  div1Function() {
    this.div1 = true;
    this.div2 = false;
    this.div3 = false;
    this.div4 = false;
    this.div6 = false;
    this.div7 = false;
    this.div8 = false;
  }

  div2Function() {
    this.div2 = true;
    this.div1 = false;
    this.div3 = false;
    this.div4 = false;
    this.div6 = false;
    this.div7 = false;
    this.div8 = false;
  }

  div3Function() {
    this.div3 = true;
    this.div2 = false;
    this.div1 = false;
    this.div4 = false;
    this.div6 = false;
    this.div7 = false;
    this.div8 = false;
  }

  div4Function() {
    this.div4 = true;
    this.div2 = false;
    this.div1 = false;
    this.div3 = false;
    this.div6 = false;
    this.div7 = false;
    this.div8 = false;
  }

  div5Function() {
    this.div4 = false;
    this.div2 = false;
    this.div1 = false;
    this.div3 = false;
    this.div6 = false;
    this.div7 = false;
    this.div8 = false;
  }

  div6Function() {
    this.div4 = false;
    this.div2 = false;
    this.div1 = false;
    this.div3 = false;
    this.div6 = true;
    this.div7 = false;
    this.div8 = false;
  }

  div7Function() {
    this.div4 = false;
    this.div2 = false;
    this.div1 = false;
    this.div3 = false;
    this.div6 = false;
    this.div7 = true;
    this.div8 = false;
  }

  div8Function() {
    this.div4 = false;
    this.div2 = false;
    this.div1 = false;
    this.div3 = false;
    this.div6 = false;
    this.div7 = false;
    this.div8 = true;
  }

  selectFacultyForUpdate(faculty: any) {
    this.selectedFaculty = faculty;
    console.log(faculty);
    console.log("this is the selected");
    console.log(this.selectedFaculty)
    this.div3Function();

  }

}
