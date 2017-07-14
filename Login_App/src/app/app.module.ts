import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { FormsModule }   from  '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { HeaderComponent } from './blocks/header/header.component';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { AuthenticationService } from './services/authentication/authentication.service';

@NgModule({
  imports:      [ BrowserModule,FormsModule,HttpModule,RouterModule.forRoot([
    {path:'',redirectTo:'/login', pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent},
      {path:'welcome',component:WelcomeComponent}
  
  ]) ],
  declarations: [ AppComponent,LoginComponent ,SignupComponent,WelcomeComponent,HeaderComponent],
  bootstrap:    [ AppComponent],
  providers:[CookieService, AuthenticationService]
})
export class AppModule { }
