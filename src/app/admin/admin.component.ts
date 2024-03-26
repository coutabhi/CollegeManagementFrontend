import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { InsertService } from '../insert.service';
import { UserComponent } from '../user/user.component';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

 
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
     this.ls.loginAdminFromRemote(this.admin).subscribe(
        _data=>{
         alert("logged in successfully");
         console.log("Successfull");
         this.router.navigateByUrl('/adashboard');
       },
       _error=>{
         this.msg='Please recheck your password and emailid';
         console.log("Error");
       }
     )
   }
  
}
