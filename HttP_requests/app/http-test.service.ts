import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Headers } from '@angular/http';
import { Observable } from "rxjs/Observable";

@Injectable()

export class HTTPTestService {
      postJson$: Observable<any>;
   

   
    constructor(private _http: Http) { 
           
     }

    getCurrentTime() {
        return this._http.get('https://accedo-video-app-api.herokuapp.com/getProducts')
            .map(res => res.json());

    }

    postJson(data) {
        console.log(data);
        var json =data;

        var headers = new Headers();
      
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post('https://accedo-video-app-api.herokuapp.com/addProduct', json
            )
            .map(res => res.json());


    }
    
}

