import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Headers } from '@angular/http';
import { Observable } from "rxjs/Observable";

@Injectable()

export class HTTPTestService {
      postJson$: Observable<any>;
    putJson$: Observable<any>;
public searchID;
   
    constructor(private _http: Http) { 
           this.searchID = {_id: '5912e701ec8f4b040018faea' , name: 'product 4'};
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
putJson(data){
    var json=data;
          var headers = new Headers();
      
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
  return this._http.put('https://accedo-video-app-api.herokuapp.com/updateProducts', json
            )
            .map(res => res.json());
}
        
deleteData(value:any){
    console.log(value);
  var json=value;
          var headers = new Headers();
      
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
  return this._http.delete('https://accedo-video-app-api.herokuapp.com/deleteProduct', json
            )
            .map(res => res.json());
}
 }
  
}  

