import { Injectable } from '@angular/core';
import { Store } from 'rxjs-observable-store';

import { OfficeState } from './office-state';
import { Employee } from '../employees.interface';

@Injectable({providedIn: 'root'})
export class OfficeStore extends Store<OfficeState> {
    constructor(){
      super(new OfficeState())
    }

    addEmployee(person: Employee, location): void {
      this.setState({
        ...this.state,
        [location]: [...this.state[location], person]
      });
    }

    removeEmployee(person: Employee, location): void {
      this.setState({
        ...this.state,
        [location]: this.state[location].filter(item => item.name !== person.name)
      });
    }
}
