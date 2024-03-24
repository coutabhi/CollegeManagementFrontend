import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsertService } from '../insert.service';
import { AuthService } from '../auth.service';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-librarian',
  templateUrl: './librarian.component.html',
  styleUrls: ['./librarian.component.css']
})
export class LibrarianComponent implements OnInit {


  msg: String = "";
  librarian: UserComponent = new UserComponent();

  constructor(private router: Router, private ls: InsertService, private authService: AuthService) { }

  ngOnInit(): void {

  }

  goToAdmin(adminpanel: String) {
    this.router.navigate(['${adminpanel}']);
  }

  loginData(logindata: any) {
    this.ls.loginservice3Staff(logindata.value).subscribe();
  }

  loginLibrarian() {
    this.ls.loginFacultyFromRemoteStaff(this.librarian).subscribe(
      _data => {
        alert("logged in successfully");
        this.router.navigateByUrl('/libdash');
      },
      _error => {
        this.msg = 'Please recheck your password and emailid';
        console.log("Error");
      }
    )
  }


}
