import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsertService } from 'src/app/insert.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  ngOnInit(): void {
  }

  selectedEvent: any; 

  constructor(private is:InsertService,private ps1:InsertService,private ps:InsertService,private router:Router) {

    this.getAllEvents();
   }

  insertEvent(insert:any){
    this.is.createEvent(insert.value).subscribe();
    alert('You Have successfully added Event');
    window.location.reload();
  }

  loginpage:any;
  updateEventDetails(data:any){
    this.ps1.updateMEFaculties(data.value).subscribe();
    alert('You Have successfully updated event data');
    window.location.reload();
  }

  delteEvents(data:any){
    console.log("this is the data", data)
    this.ps.deleteEvent(data.value.id).subscribe();
    alert('You Have successfully deleted entered event');
    window.location.reload();
  }

  loginpages:any;
  getAllEvents(){
    this.is.getAllEvents().subscribe((resp1:any)=>{this.loginpages=resp1;});
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

  selectEventForUpdate(faculty: any) {
    this.selectedEvent = faculty;
    console.log(faculty);
    console.log("this is the selected");
    console.log(this.selectedEvent)
    this.div3Function(); 

  }
}
