import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Headers } from '@angular/http';
import { Observable } from "rxjs/Observable";

@Injectable()

export class AuthenticationService {
     public response: any;

 public isLogin: boolean = false;
 
    constructor(private _http: Http) {
    }


    postData(value: any, url: any) {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        // console.log(value,url);
        // var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post(url, value)
            .map((res) => {
                console.log(res.json());
                 this.response = res.json();
                // console.log(this.response);
            
return res.json();
            });

    }

}



