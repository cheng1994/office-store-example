import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlusCircle, faMinusCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { RoomComponent } from './room/room.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPersonComponent,
    RoomComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(faPlusCircle, faMinusCircle, faTimesCircle);
  }
}
