import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee_list.component';
import { EmployeeDetailComponent } from './employee_details.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, EmployeeListComponent, EmployeeDetailComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
