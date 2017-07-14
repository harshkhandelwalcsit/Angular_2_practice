import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTPTestComponent } from './http-test.component';
import { RouterModule } from '@angular/router';

import { AppComponent }   from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule }   from  '@angular/forms';

@NgModule({
  imports:      [ BrowserModule,HttpModule,FormsModule],
  declarations: [ AppComponent,HTTPTestComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }



