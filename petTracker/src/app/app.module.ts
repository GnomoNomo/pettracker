import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventListComponent } from './modules/event/components/event-list/event-list.component';
import { EventItemComponent } from './modules/event/components/event-item/event-item.component';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
