import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { UserComponent } from './user/user.component';
import { Book } from './book/Book';
import { BookAssignment } from './book/BookAssignment';
import { EventData } from './upcoming-news/EventData';

@Injectable({
  providedIn: 'root'
})
export class InsertService {

  constructor(private http: HttpClient) { }

  
 /*
 
  REMOTE_BASE_URL = "http://52.66.125.0:8081"


  ADMIN_INSERT = `${this.REMOTE_BASE_URL}/api/v1/admin/insert`
  ADMIN_LOGIN = `${this.REMOTE_BASE_URL}/api/v1/admin/login`
  ADMIN_VIEW = `${this.REMOTE_BASE_URL}/api/v1/admin/view`
  ADMIN_ALL = `${this.REMOTE_BASE_URL}/api/v1/admin/viewall`
  ADMIN_UPDATE = `${this.REMOTE_BASE_URL}/api/v1/admin/update`
  ADMIN_DELETE = `${this.REMOTE_BASE_URL}/api/v1/admin/delete`
  ADMIN_FORGOT = `${this.REMOTE_BASE_URL}/api/v1/admin/forgot-password`

  url1 = `${this.REMOTE_BASE_URL}/addstudent`
  url2 = `${this.REMOTE_BASE_URL}/loginstudent`
  url3 = `${this.REMOTE_BASE_URL}/viewstudent`
  url11 = `${this.REMOTE_BASE_URL}/updatestudent`
  url12 = `${this.REMOTE_BASE_URL}/deletestudent`

  url15 = `${this.REMOTE_BASE_URL}/addeestudent`
  url16 = `${this.REMOTE_BASE_URL}/logineestudent`
  url17 = `${this.REMOTE_BASE_URL}/vieweestudent`
  url18 = `${this.REMOTE_BASE_URL}/updateeestudent`
  url19 = `${this.REMOTE_BASE_URL}/deleteeestudent`

  url20 = `${this.REMOTE_BASE_URL}/addcestudent`
  url21 = `${this.REMOTE_BASE_URL}/logincestudent`
  url22 = `${this.REMOTE_BASE_URL}/viewcestudent`
  url23 = `${this.REMOTE_BASE_URL}/updatecestudent`
  url24 = `${this.REMOTE_BASE_URL}/deletecestudent`

  url8 = `${this.REMOTE_BASE_URL}/addmefaculty`
  url9 = `${this.REMOTE_BASE_URL}/loginmefaculty`
  url10 = `${this.REMOTE_BASE_URL}/viewmefaculty`
  url13 = `${this.REMOTE_BASE_URL}/updatemefaculty`
  url14 = `${this.REMOTE_BASE_URL}/deletemefaculty`

  url25 = `${this.REMOTE_BASE_URL}/addeefaculty`
  url26 = `${this.REMOTE_BASE_URL}/logineefaculty`
  url27 = `${this.REMOTE_BASE_URL}/vieweefaculty`
  url28 = `${this.REMOTE_BASE_URL}/updateeefaculty`
  url29 = `${this.REMOTE_BASE_URL}/deleteeefaculty`

  url30 = `${this.REMOTE_BASE_URL}/addcefaculty`
  url31 = `${this.REMOTE_BASE_URL}/logincefaculty`
  url32 = `${this.REMOTE_BASE_URL}/viewcefaculty`
  url33 = `${this.REMOTE_BASE_URL}/updatecefaculty`
  url34 = `${this.REMOTE_BASE_URL}/deletecefaculty`

  url35 = `${this.REMOTE_BASE_URL}/addstaff`
  url36 = `${this.REMOTE_BASE_URL}/loginstaff`
  url37 = `${this.REMOTE_BASE_URL}/viewstaff`
  url38 = `${this.REMOTE_BASE_URL}/updatestaff`
  url39 = `${this.REMOTE_BASE_URL}/deletestaff`


  url40 = `${this.REMOTE_BASE_URL}/addbranch`
  url41 = `${this.REMOTE_BASE_URL}/viewbranch`
  url42 = `${this.REMOTE_BASE_URL}/deletebranch`


  url43 = `${this.REMOTE_BASE_URL}/addnotify`
  url44 = `${this.REMOTE_BASE_URL}/viewnotify`
  url45 = `${this.REMOTE_BASE_URL}/deletenotify`


  url46 = `${this.REMOTE_BASE_URL}/addmemarksheet`
  url47 = `${this.REMOTE_BASE_URL}/viewmemarksheet`
  url48 = `${this.REMOTE_BASE_URL}/deletememarksheet`
  url49 = `${this.REMOTE_BASE_URL}/updatememarksheet`

  url50 = `${this.REMOTE_BASE_URL}/addfees`
  url51 = `${this.REMOTE_BASE_URL}/viewfees`

  private apiUrl = `${this.REMOTE_BASE_URL}/api/v1/books`;

  private apiUrl2 = `${this.REMOTE_BASE_URL}/api/v1/books/assignments`;

  private eventsUrl = `${this.REMOTE_BASE_URL}/api/v1/events`;

  */


  LOCAL_BASE_URL = "http://localhost:8081"

  ADMIN_INSERT = `${this.LOCAL_BASE_URL}/api/v1/admin/insert`
  ADMIN_LOGIN = `${this.LOCAL_BASE_URL}/api/v1/admin/login`
  ADMIN_VIEW = `${this.LOCAL_BASE_URL}/api/v1/admin/view`
  ADMIN_ALL = `${this.LOCAL_BASE_URL}/api/v1/admin/viewall`
  ADMIN_UPDATE = `${this.LOCAL_BASE_URL}/api/v1/admin/update`
  ADMIN_DELETE = `${this.LOCAL_BASE_URL}/api/v1/admin/delete`
  ADMIN_FORGOT = `${this.LOCAL_BASE_URL}/api/v1/admin/forgot-password`

  url1 = `${this.LOCAL_BASE_URL}/addstudent`
  url2 = `${this.LOCAL_BASE_URL}/loginstudent`
  url3 = `${this.LOCAL_BASE_URL}/viewstudent`
  url11 = `${this.LOCAL_BASE_URL}/updatestudent`
  url12 = `${this.LOCAL_BASE_URL}/deletestudent`

  url15 = `${this.LOCAL_BASE_URL}/addeestudent`
  url16 = `${this.LOCAL_BASE_URL}/logineestudent`
  url17 = `${this.LOCAL_BASE_URL}/vieweestudent`
  url18 = `${this.LOCAL_BASE_URL}/updateeestudent`
  url19 = `${this.LOCAL_BASE_URL}/deleteeestudent`

  url20 = `${this.LOCAL_BASE_URL}/addcestudent`
  url21 = `${this.LOCAL_BASE_URL}/logincestudent`
  url22 = `${this.LOCAL_BASE_URL}/viewcestudent`
  url23 = `${this.LOCAL_BASE_URL}/updatecestudent`
  url24 = `${this.LOCAL_BASE_URL}/deletecestudent`

  url8 = `${this.LOCAL_BASE_URL}/addmefaculty`
  url9 = `${this.LOCAL_BASE_URL}/loginmefaculty`
  url10 = `${this.LOCAL_BASE_URL}/viewmefaculty`
  url13 = `${this.LOCAL_BASE_URL}/updatemefaculty`
  url14 = `${this.LOCAL_BASE_URL}/deletemefaculty`

  url25 = `${this.LOCAL_BASE_URL}/addeefaculty`
  url26 = `${this.LOCAL_BASE_URL}/logineefaculty`
  url27 = `${this.LOCAL_BASE_URL}/vieweefaculty`
  url28 = `${this.LOCAL_BASE_URL}/updateeefaculty`
  url29 = `${this.LOCAL_BASE_URL}/deleteeefaculty`

  url30 = `${this.LOCAL_BASE_URL}/addcefaculty`
  url31 = `${this.LOCAL_BASE_URL}/logincefaculty`
  url32 = `${this.LOCAL_BASE_URL}/viewcefaculty`
  url33 = `${this.LOCAL_BASE_URL}/updatecefaculty`
  url34 = `${this.LOCAL_BASE_URL}/deletecefaculty`

  url35 = `${this.LOCAL_BASE_URL}/addstaff`
  url36 = `${this.LOCAL_BASE_URL}/loginstaff`
  url37 = `${this.LOCAL_BASE_URL}/viewstaff`
  url38 = `${this.LOCAL_BASE_URL}/updatestaff`
  url39 = `${this.LOCAL_BASE_URL}/deletestaff`


  url40 = `${this.LOCAL_BASE_URL}/addbranch`
  url41 = `${this.LOCAL_BASE_URL}/viewbranch`
  url42 = `${this.LOCAL_BASE_URL}/deletebranch`


  url43 = `${this.LOCAL_BASE_URL}/addnotify`
  url44 = `${this.LOCAL_BASE_URL}/viewnotify`
  url45 = `${this.LOCAL_BASE_URL}/deletenotify`


  url46 = `${this.LOCAL_BASE_URL}/addmemarksheet`
  url47 = `${this.LOCAL_BASE_URL}/viewmemarksheet`
  url48 = `${this.LOCAL_BASE_URL}/deletememarksheet`
  url49 = `${this.LOCAL_BASE_URL}/updatememarksheet`

  url50 = `${this.LOCAL_BASE_URL}/addfees`
  url51 = `${this.LOCAL_BASE_URL}/viewfees`

  private apiUrl = `${this.LOCAL_BASE_URL}/api/v1/books`;

  private apiUrl2 = `${this.LOCAL_BASE_URL}/api/v1/books/assignments`;

  private eventsUrl = `${this.LOCAL_BASE_URL}/api/v1/events`;


  getAllEvents(): Observable<EventData[]> {
    return this.http.get<EventData[]>(this.eventsUrl);
  }

  createEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(this.eventsUrl, event);
  }

  deleteEvent(eventId: number): Observable<void> {
    return this.http.delete<void>(`${this.eventsUrl}/${eventId}`);
  }


  loginservice2(data3: any) {
    return this.http.post(this.ADMIN_LOGIN, data3);
  }

  public loginAdminFromRemote(admin: UserComponent): Observable<object> {
    console.log(admin);
    return this.http.post(this.ADMIN_LOGIN, admin);

  }

  addAdmin(data: any) {
    return this.http.post(this.ADMIN_INSERT, data);
  }

  viewAllAdmin() {
    return this.http.get(this.ADMIN_ALL);
  }

  updateAdmin(value: any) {
    return this.http.post(this.ADMIN_UPDATE, value);
  }
  forgotPassword(email: string, password: string): Observable<string> {
    const body = { email, password };
    return this.http.post<string>(this.ADMIN_FORGOT, body);
  }
  deleteAdmin(data: any) {
    return this.http.post(this.ADMIN_DELETE, data);
  }

  addStudent(data: any) {
    return this.http.post(this.url1, data);
  }
  viewStudent() {
    return this.http.get(this.url3);
  }
  updateStudent(value: any) {
    return this.http.post(this.url11, value);
  }
  deleteStudent(data: any) {
    return this.http.post(this.url12, data);
  }


  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/${id}`);
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.apiUrl, book);
  }

  updateBook(id: number, book: Book): Observable<Book> {
    console.log("Code comes here in the update bookk", id, book)
    return this.http.put<Book>(`${this.apiUrl}/${id}`, book);
  }

  deleteBook(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getAllBookAssignments(): Observable<BookAssignment[]> {
    return this.http.get<BookAssignment[]>(this.apiUrl2);
  }

  saveBookAssignment(bookAssignment: BookAssignment): Observable<BookAssignment> {
    return this.http.post<BookAssignment>(this.apiUrl2, bookAssignment);
  }

  deleteBookAssignment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl2}/${id}`);
  }

  assignBookToStudent(studentId: number, bookId: number): Observable<void> {
    const assignUrl = `${this.apiUrl2}/assign/${studentId}/${bookId}`;
    return this.http.post<void>(assignUrl, {});
  }


  loginservice1(data2: any) {
    return this.http.post(this.url2, data2);
  }

  public loginUserFromRemote(user: UserComponent): Observable<object> {
    console.log(`In the loginUserFromRemote`)
    console.log(user);
    return this.http.post(this.url2, user);

  }


  addEEStudent(data: any) {
    return this.http.post(this.url15, data);
  }
  viewEEStudent() {
    return this.http.get(this.url17);
  }
  updateEEStudent(value: any) {
    return this.http.post(this.url18, value);
  }
  deleteEEStudent(data: any) {
    return this.http.post(this.url19, data);
  }

  loginservice1EE(data2: any) {
    return this.http.post(this.url16, data2);
  }

  public loginUserFromRemoteEE(user: UserComponent): Observable<object> {
    console.log(user);
    return this.http.post(this.url16, user);

  }


  addCEStudent(data: any) {
    return this.http.post(this.url20, data);
  }
  viewCEStudent() {
    return this.http.get(this.url22);
  }
  updateCEStudent(value: any) {
    return this.http.post(this.url23, value);
  }
  deleteCEStudent(data: any) {
    return this.http.post(this.url24, data);
  }

  loginservice1CE(data2: any) {
    return this.http.post(this.url21, data2);
  }

  public loginUserFromRemoteCE(user: UserComponent): Observable<object> {
    console.log(user);
    return this.http.post(this.url21, user);

  }



  addMEFaculties(data: any) {
    return this.http.post(this.url8, data);
  }
  viewMEFaculties() {
    return this.http.get(this.url10);
  }
  updateMEFaculties(value: any) {
    return this.http.post(this.url13, value);
  }
  deleteMEFaculties(data: any) {
    return this.http.post(this.url14, data);
  }

  loginservice3(data4: any) {
    return this.http.post(this.url9, data4);
  }

  public loginFacultyFromRemote(faculty: UserComponent): Observable<object> {
    console.log(faculty);
    return this.http.post(this.url9, faculty);

  }

  addEEFaculties(data: any) {
    return this.http.post(this.url25, data);
  }
  viewEEFaculties() {
    return this.http.get(this.url27);
  }
  updateEEFaculties(value: any) {
    return this.http.post(this.url28, value);
  }
  deleteEEFaculties(data: any) {
    return this.http.post(this.url29, data);
  }

  loginservice3EE(data4: any) {
    return this.http.post(this.url26, data4);
  }

  public loginFacultyFromRemoteEE(faculty: UserComponent): Observable<object> {
    console.log(faculty);
    return this.http.post(this.url26, faculty);

  }


  addCEFaculties(data: any) {
    return this.http.post(this.url30, data);
  }
  viewCEFaculties() {
    return this.http.get(this.url32);
  }
  updateCEFaculties(value: any) {
    return this.http.post(this.url33, value);
  }
  deleteCEFaculties(data: any) {
    return this.http.post(this.url34, data);
  }

  loginservice3CE(data4: any) {
    return this.http.post(this.url31, data4);
  }

  public loginFacultyFromRemoteCE(faculty: UserComponent): Observable<object> {
    console.log(faculty);
    return this.http.post(this.url31, faculty);

  }

  addStaff(data: any) {
    return this.http.post(this.url35, data);
  }
  viewStaff() {
    return this.http.get(this.url37);
  }
  updateStaff(value: any) {
    return this.http.post(this.url38, value);
  }
  deleteStaff(data: any) {
    return this.http.post(this.url39, data);
  }

  loginservice3Staff(data4: any) {
    return this.http.post(this.url36, data4);
  }

  public loginFacultyFromRemoteStaff(faculty: UserComponent): Observable<object> {
    console.log(faculty);
    return this.http.post(this.url36, faculty);
  }


  addBranch(data: any) {
    return this.http.post(this.url40, data);
  }
  viewBranch() {
    return this.http.get(this.url41);
  }
  deleteBranch(data: any) {
    return this.http.post(this.url42, data);
  }


  addNotify(data: any) {
    return this.http.post(this.url43, data);
  }
  viewNotify() {
    return this.http.get(this.url44);
  }
  deleteNotify(data: any) {
    return this.http.post(this.url45, data);
  }


  addMEMarksheet(data: any) {
    return this.http.post(this.url46, data);
  }
  viewMEMarksheet() {
    return this.http.get(this.url47);
  }
  updateMEMarksheet(value: any) {
    return this.http.post(this.url49, value);
  }
  deleteMEMarksheet(data: any) {
    return this.http.post(this.url48, data);
  }

  addFees(data: any) {
    return this.http.post(this.url50, data);
  }
  viewFees() {
    return this.http.get(this.url51);
  }
}
