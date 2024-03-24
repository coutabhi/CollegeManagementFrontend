import { Component, OnInit } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { Router } from '@angular/router';
import { InsertService } from '../insert.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-librarian',
  templateUrl: './librarian.component.html',
  styleUrls: ['./librarian.component.css']
})
export class LibrarianComponent implements OnInit {


  msg:String="";
  admin: UserComponent= new UserComponent();

  constructor(private router:Router,private ls:InsertService,private authService:AuthService) { }

  ngOnInit(): void {
   
  }

  goToAdmin(adminpanel:String){
    this.router.navigate(['${adminpanel}']);
  }

  loginData(logindata:any){
    this.ls.loginservice2(logindata.value).subscribe();
  }

  loginAdmin(){
    console.log(this.admin)
    this.ls.loginAdminFromRemote(this.admin).subscribe(
      (       _data: any)=>{
        alert("logged in successfully");
        console.log("Successfull");
        this.router.navigateByUrl('/adminpanel');
      },
      (      _error: any)=>{
        this.msg='Please recheck your password and emailid';
        console.log("Error");
      }
    )
  }
 

}
