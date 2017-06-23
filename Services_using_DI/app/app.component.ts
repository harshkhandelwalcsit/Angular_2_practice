import { Component } from '@angular/core';
import { EmployeeService } from './employee.service'

@Component({
  selector: 'my-app',
  template: `<h1>Company</h1>
  <employee-list></employee-list>
  <employee-details></employee-details>`,
  providers: [EmployeeService]
})
export class AppComponent { }
