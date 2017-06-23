import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTPTestComponent } from './http-test.component'
import { AppComponent }   from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule }   from  '@angular/forms';
import { FromComponent } from './form.component';
@NgModule({
  imports:      [ BrowserModule,HttpModule,FormsModule  ],
  declarations: [ AppComponent,HTTPTestComponent,FromComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }



