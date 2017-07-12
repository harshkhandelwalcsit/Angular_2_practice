import { Component } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';	
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication/authentication.service';
@Component ({
  selector: 'header-page',
  templateUrl: `./app/blocks/header/header.component.html`

})
export class HeaderComponent {
  constructor(
    private _cookieService:CookieService,
    private _router:Router,
    private _authService:AuthenticationService
  ) {
       if(_cookieService.get('auth_token')){
        _authService.isLogin=true;
        _router.navigate(['/welcome']);
      } else {
       
        _router.navigate(['/login']);
      }

  }
 

    private userLogout(){
      this._cookieService.remove('auth_token');
      this._router.navigate(['/login']);
      this._authService.isLogin=false;
    }
  }
