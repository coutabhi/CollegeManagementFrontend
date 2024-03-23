import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { InsertService } from '../insert.service';
import { UserComponent } from '../user/user.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  //email: String="";
 // password: String ="";

  msg:String="";
  user: UserComponent= new UserComponent();

  constructor(private router:Router,private ls:InsertService,private authService:AuthService) { }

  ngOnInit(): void {
    //this.email="";
    //this.password="";
  }


  div1:boolean=false;
  div2:boolean=false;
  div3:boolean=false;
 
  div1Function(){
      this.div1=true;
      this.div2=false;
      this.div3=false;
  }

  div2Function(){
      this.div2=true;
      this.div1=false;
      this.div3=false;
  }

  div3Function(){
      this.div3=true;
      this.div2=false;
      this.div1=false;
  }
  selectFunction(event: any) {
    const selectedValue = event.target.value;
    switch (selectedValue) {
      case 'mechanical':
        this.div1Function();
        break;
      case 'electronics':
        this.div2Function();
        break;
      case 'computer':
        this.div3Function();
        break;
      default:
        console.log("Invalid selection");
    }
  }

//   div4Function(){
//     this.div2=false;
//     this.div1=false;
//     this.div3=false;
// }

  goToPage(studentsignup:String){
    //this.router.navigate(['${about}']);
    this.router.navigateByUrl('/student-sign-up');
  }


  goToUser1(studentpanel:String){
    this.router.navigate(['${studentpanel}']);
  }

  loginData1(logindata:any){
    this.ls.loginservice1(logindata.value).subscribe();
  }

  loginUser1(){
    console.log(this.user)
    this.ls.loginUserFromRemote(this.user).subscribe(
       _data=>{
        //this.msg1='You logged in successfully';
        alert("logged in successfully");
        console.log("Successfull");
        this.router.navigateByUrl('/studentpanel');
      },
      _error=>{
        this.msg='Please recheck your password and emailid';
        //alert("logged in successfully");
        console.log("Error");
        //alert("Failed login");
        //this.router.navigateByUrl('/afterloginnavigation');
      }
    )
  }

  
  goToUser2(eestudentpanel:String){
    this.router.navigate(['${eestudentpanel}']);
  }

  loginData2(logindata:any){
    this.ls.loginservice1EE(logindata.value).subscribe();
  }

  loginUser2(){
    console.log(this.user)
    this.ls.loginUserFromRemoteEE(this.user).subscribe(
       _data=>{
        //this.msg1='You logged in successfully';
        alert("logged in successfully");
        console.log("Successfull");
        this.router.navigateByUrl('/eestudentpanel');
      },
      _error=>{
        this.msg='Please recheck your password and emailid';
        //alert("logged in successfully");
        console.log("Error");
        //alert("Failed login");
        //this.router.navigateByUrl('/afterloginnavigation');
      }
    )
  }


  goToUser3(cestudentpanel:String){
    this.router.navigate(['${cestudentpanel}']);
  }

  loginData3(logindata:any){
    this.ls.loginservice1CE(logindata.value).subscribe();
  }

  loginUser3(){
    console.log(this.user)
    this.ls.loginUserFromRemoteCE(this.user).subscribe(
       _data=>{
        //this.msg1='You logged in successfully';
        alert("logged in successfully");
        console.log("Successfull");
        this.router.navigateByUrl('/cestudentpanel');
      },
      _error=>{
        this.msg='Please recheck your password and emailid';
        //alert("logged in successfully");
        console.log("Error");
        //alert("Failed login");
        //this.router.navigateByUrl('/afterloginnavigation');
      }
    )
  }
  
}
