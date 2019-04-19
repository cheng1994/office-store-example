import { Employee } from '../employees.interface';

export class OfficeState {
    conferenceRoom: Employee[] = [];
    reception: Employee[] = [];
    bossOffice: Employee[] = [];
    sales: Employee[] = [];
    employees: Employee[] = [];
}
