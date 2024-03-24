import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsertService } from 'src/app/insert.service';

@Component({
  selector: 'app-admin-ops',
  templateUrl: './admin-ops.component.html',
  styleUrls: ['./admin-ops.component.css']
})
export class AdminOpsComponent implements OnInit {

  ngOnInit(): void {
  }

  selectedAdmin: any; 

  constructor(private is:InsertService,private ps1:InsertService,private ps:InsertService,private router:Router) {
    this.viewLoginpage();
   }

  loginpage:any;

  updateLoginpage(data:any){
    this.ps1.updateAdmin(data.value).subscribe();
    alert('You Have successfully updated faculty data');
    window.location.reload();
  }

  deleteLoginpage(data:any){
    this.ps.deleteAdmin(data.value).subscribe();
    alert('You Have successfully deleted faculty data');
    window.location.reload();
  }

  loginpages:any;
  viewLoginpage(){
    this.is.viewAllAdmin().subscribe((resp1:any)=>{this.loginpages=resp1;});
  }
 
    div1:boolean=true;
    div2:boolean=false;
    div3:boolean=false;
    div4:boolean=false;

    div1Function(){
        this.div1=true;
        this.div2=false;
        this.div3=false;
        this.div4=false;
    }

    div2Function(){
        this.div2=true;
        this.div1=false;
        this.div3=false;
        this.div4=false;
    }

    div3Function(){
        this.div3=true;
        this.div2=false;
        this.div1=false;
        this.div4=false;
    }
  
    div4Function(){
      this.div4=true;
      this.div2=false;
      this.div1=false;
      this.div3=false;
  }

    div5Function(){
    this.div4=false;
    this.div2=false;
    this.div1=false;
    this.div3=false;
  }

  selectFacultyForUpdate(admin: any) {
    this.selectedAdmin = admin;
    this.div3Function(); 
  }

}
