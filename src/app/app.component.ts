import { Component } from '@angular/core';
import { OfficeStore } from './core/office-store/office-store';
import { employees } from './core/employees';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private store: OfficeStore) {
    this.store.setEmployees(employees);
  }
}
