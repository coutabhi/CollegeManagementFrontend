import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsertService } from '../insert.service';

@Component({
  selector: 'app-astudents',
  templateUrl: './astudents.component.html',
  styleUrls: ['./astudents.component.css']
})
export class AstudentsComponent implements OnInit {
  
  constructor(private router:Router) {}

    
  ngOnInit(): void {
  }


 

me(){
  this.router.navigateByUrl("/mestudents");
}
ee(){
  this.router.navigateByUrl("/eestudents");
}
ce(){
  this.router.navigateByUrl("/cestudents");
}

}
