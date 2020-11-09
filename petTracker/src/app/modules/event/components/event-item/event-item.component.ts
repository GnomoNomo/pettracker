import { Component, Input, OnInit } from '@angular/core';
import { DoggyEvent } from '../../doggy-event.model';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent implements OnInit {
  @Input() public event: DoggyEvent;

  constructor() { }

  ngOnInit(): void {
  }

}
