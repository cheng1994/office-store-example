import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { OfficeStore } from '../core/office-store/office-store';
import { Subject } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators'
import { Employee } from '../core/employees.interface';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {

  @Input() location: string;
  showList = false;
  // ngUnsubscribe = new Subject();
  // employees: Employee[];

  constructor(public store: OfficeStore) { }

  // for cleaning up subscriptions
  // ngOnDestroy() {
  //   this.ngUnsubscribe.next();
  //   this.ngUnsubscribe.complete();
  // }

  ngOnInit() {
    // subscription to the store
    // this.store.state$
    //   .pipe(
    //     takeUntil(this.ngUnsubscribe),
    //     map(state => state[this.location]))
    //   .subscribe(data => {
    //     this.employees = data;
    //   })
  }

  addEmployee(employee): void {
    this.store.addEmployee(employee, this.location);
    this.store.removeEmployee(employee, 'employees');
  }
}
