import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DoggyEvent } from '../../doggy-event.model';

import { EventItemComponent } from './event-item.component';

describe('EventItemComponent', () => {
  let component: EventItemComponent;
  let fixture: ComponentFixture<EventItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create list item', () => {
    component.event = new DoggyEvent();
    expect(component).toBeTruthy();
  });

  it('should set event title', () => {
    const titleString = 'Title';
    const testEvent = new DoggyEvent();
    testEvent.title = titleString;
    component.event = testEvent;
    fixture.detectChanges();
    let h5: HTMLElement;
    h5 = fixture.nativeElement.querySelector('#list-item-title');
    expect(h5.textContent).toContain(titleString);
  });

  it('should set event time', () => {
    const date = '02/02/2020';
    const testEvent = new DoggyEvent();
    testEvent.date = date;
    component.event = testEvent;
    fixture.detectChanges();
    let small: HTMLElement;
    small = fixture.nativeElement.querySelector('#list-item-date');
    expect(small.textContent).toContain(date);
  });

  it('should set event note', () => {
    const noteText = 'test text';
    const testEvent = new DoggyEvent();
    testEvent.note = noteText;
    component.event = testEvent;
    fixture.detectChanges();
    let small: HTMLElement;
    small = fixture.nativeElement.querySelector('#list-item-note');
    expect(small.textContent).toContain(noteText);
  });
});
