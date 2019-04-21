import { Employee } from '../employees.interface';
import { employees } from '../employees';

export class OfficeState {
    conferenceRoom: Employee[] = [];
    reception: Employee[] = [];
    bossOffice: Employee[] = [];
    sales: Employee[] = [];
    employees: Employee[] = [...employees];
}
