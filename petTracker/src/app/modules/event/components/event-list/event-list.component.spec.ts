import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventListComponent } from './event-list.component';
import { EventService } from '../../../event.service';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('EventListComponent', () => {
  let component: EventListComponent;
  let fixture: ComponentFixture<EventListComponent>;
  let fakeEventService;

  beforeEach(async () => {
    const spyEventService = jasmine.createSpyObj('EventService', ['getAllEvents']);

    await TestBed.configureTestingModule({
    declarations: [ EventListComponent ],
    providers: [{provide: EventService, useValue: spyEventService}]
    }).compileComponents();

    fixture = TestBed.createComponent(EventListComponent);
    component = fixture.componentInstance;
    fakeEventService = TestBed.inject(EventService);
  });

  it('should create event list', () => {
    expect(fixture.nativeElement.querySelector('#event-list')).toBeTruthy();
  });

  it('should display title', () => {
    expect(fixture.nativeElement.querySelector('#event-list-title')).toBeTruthy();
  });

  it('should populate event items', () => {
      const fakeEventList = [{id: 1, title: 'Pooped', note: 'It was liquid', date: '02/02/2020'}];
      component.events = fakeEventList;
      expect(component.events.length).toBeGreaterThan(0);
  });

  it('should contain items', () => {
    const fakeEventList = [{id: 1, title: 'Pooped', note: 'It was liquid', date: '02/02/2020'}];
    fakeEventService.getAllEvents.and.returnValue(of(fakeEventList));
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('#event-list-items').length).toBeGreaterThan(0);
  });

  it('should populate event items after service call', () => {
    const fakeEventList = [{id: 1, title: 'Pooped', note: 'It was liquid', date: '02/02/2020'}];
    fakeEventService.getAllEvents.and.returnValue(of(fakeEventList));
    component = new EventListComponent(fakeEventService);
    component.ngOnInit();
    expect(component.events.length).toBe(1);
  });
});
