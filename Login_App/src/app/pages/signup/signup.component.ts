import { Component,OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { Http, HttpModule } from '@angular/http';
import {CookieService} from 'angular2-cookie/core';
import { Router } from '@angular/router';


@Component({
    selector:'signup-page',
  templateUrl:`app/pages/signup/signup.component.html`,
  providers: [AuthenticationService],
})
export class SignupComponent {
  public res:any;
  constructor(private _https: AuthenticationService,private _cookieService:CookieService,private _router:Router ) {

    
    }

 

  signup(value: any) {

    this._https.postData(value, 'http://localhost/loginnn/signup.php').subscribe(
      (data) => {
        this._router.navigate(['/login']);
        // this._cookieService.put('auth_token', data.data, {});
      },
      error => { console.log(error) },
      () => console.log("Submit Data")
    );
  }
}
