import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsertService } from 'src/app/insert.service';

@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.css']
})
export class AdminAddComponent implements OnInit {

  constructor(private is:InsertService,private ps1:InsertService,private ps:InsertService,private router:Router) {   }

  ngOnInit(): void {
  }

  insertdetails(insert:any){
    this.is.addAdmin(insert.value).subscribe();
    alert('You Have successfully added faculty data');
    window.location.reload();
  }

}
