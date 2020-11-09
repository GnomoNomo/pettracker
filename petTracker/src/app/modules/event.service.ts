import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DoggyEvent } from './event/doggy-event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  getAllEvents(): Observable<DoggyEvent[]> {
    const events: DoggyEvent[] =
    [
      {id: 1, title: 'Pooped', note: 'It was liquid', date: '02/02/2020'}
    ];
    return of(events);
  }

  constructor() { }
}
