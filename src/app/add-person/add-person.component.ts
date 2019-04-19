import { Component, OnInit, Input } from '@angular/core';
import { OfficeStore } from '../core/office-store/office-store';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {

  @Input() location: string;
  showList = false;

  constructor(public store: OfficeStore) { }

  ngOnInit() {}

  addEmployee(employee): void {
    this.store.addEmployee(employee, this.location);
    this.store.removeEmployee(employee, 'employees');
  }
}
