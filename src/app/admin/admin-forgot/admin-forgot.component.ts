import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsertService } from 'src/app/insert.service';

@Component({
  selector: 'app-admin-forgot',
  templateUrl: './admin-forgot.component.html',
  styleUrls: ['./admin-forgot.component.css']
})
export class AdminForgotComponent implements OnInit {

  email: string = 'abc@gmail.com'; 
  password: string = 'aabc@123'; 

  constructor(private insertService: InsertService, private router: Router) { }

  ngOnInit(): void {
  }

  insertdetails() 
  {
    console.log("email",this.email)
    this.insertService.forgotPassword(this.email, this.password).subscribe(
      () => {
        alert('You have successfully changed the password');
        window.location.reload();
      },
      error => {
        console.log('Error:', error);
        alert('Error occurred while changing the password');
      }
    );
  }

}
