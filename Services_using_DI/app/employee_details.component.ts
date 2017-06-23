import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service'
@Component({
    selector: 'employee-details',
    template: `<h2>Employees Details</h2>
  <ul>
    <li *ngFor="let employee of employees">
    {{employee.id}}    ,   {{employee.name}}    ,   {{employee.gender}}
    </li>
    </ul>`
})
export class EmployeeDetailComponent implements OnInit {
    employees = [];
    constructor(private _employeeservice: EmployeeService) { }
    ngOnInit() {
        this.employees = this._employeeservice.getEmployee();

    }

}
