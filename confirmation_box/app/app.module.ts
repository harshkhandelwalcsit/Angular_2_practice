import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyComponent }   from './app.component';
import {ConfirmModule} from 'angular2-bootstrap-confirm';
@NgModule({
  imports:      [ BrowserModule,ConfirmModule ],
  declarations: [ MyComponent ],
  bootstrap:    [ MyComponent ]
})
export class MyModule { }
