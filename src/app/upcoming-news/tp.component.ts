import { Component, OnInit } from '@angular/core';
import { InsertService } from '../insert.service';
import { EventData } from './EventData';

@Component({
  selector: 'app-tp',
  templateUrl: './tp.component.html',
  styleUrls: ['./tp.component.css']
})
export class TPComponent implements OnInit {

  events: EventData[] = [];

  constructor(private eventService:InsertService) { }

  ngOnInit(): void {
    this.loadEvents()
  }

  loadEvents(): void {
    this.eventService.getAllEvents().subscribe(events => {
      this.events = events;
    });
  }

  deleteEvent(eventId: number): void {
    this.eventService.deleteEvent(eventId).subscribe(() => {
      // Reload events after deletion
      this.loadEvents();
    });
  }

}
