import { Component,OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { Http, HttpModule } from '@angular/http';
import {CookieService} from 'angular2-cookie/core';
import { Router } from '@angular/router';


@Component ({
  selector:'login-page',
  templateUrl: `app/pages/login/login.component.html`,
  providers: [AuthenticationService],
})
export class LoginComponent {
  public res:any;
  constructor(private _authService: AuthenticationService,private _cookieService:CookieService,private _router:Router ) {

    this.getCookie('auth_token');
    }
   getCookie(key: string){
this.res= this._cookieService.get(key);
 return this.res;
  }
 

  login(value: any) {
    console.log(value);
    // this.data=JSON.parse(value);
    this._authService.postData(value, 'http://localhost/loginnn/login.php').subscribe(
      (data) => {
       
         this._cookieService.put('auth_token', data.token, {});
         this._authService.isLogin = true;
        this._router.navigate(['/welcome']);    
            if(this._authService.response.Error){
                      alert('ERROR:You are not Registered!!!Please SignUp first..')
                }
                
                    
      },
      error => { console.log(error) },
      () => console.log("Submit Data")
    );
  }
}

