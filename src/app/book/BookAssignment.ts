import { Student } from "../student/Student";
import { Book } from "./Book";

export interface BookAssignment {
  id: number;
  student: Student;
  book: Book;
}
