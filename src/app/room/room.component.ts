import { Component, OnInit, Input } from '@angular/core';
import { OfficeStore } from '../core/office-store/office-store';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  @Input() location: string;
  constructor(public store: OfficeStore) { }

  ngOnInit() {
  }

  removeEmployee(employee) {
    this.store.removeEmployee(employee, this.location);
    this.store.addEmployee(employee, 'employees');
  }

  getTitle() {
    return this.location.replace( /([A-Z])/g, ' $1' );
  }

}
