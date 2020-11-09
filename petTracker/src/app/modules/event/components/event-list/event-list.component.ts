import { Component, INJECTOR, OnInit, Injectable } from '@angular/core';
import { EventItemComponent } from '../event-item/event-item.component';
import { EventService } from '../../../event.service';
import { DoggyEvent } from '../../doggy-event.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})

@Injectable()
export class EventListComponent implements OnInit {
  public events: DoggyEvent[];

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.getAllEvents().subscribe(
      doggyEvents => this.events = doggyEvents
    );
  }
}
