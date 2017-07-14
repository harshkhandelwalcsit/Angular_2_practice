import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Headers } from '@angular/http';
import { Observable } from "rxjs/Observable";

@Injectable()

export class HTTPTestService {
    postJson$: Observable<any>;

//   public information={
//    "id":" ",
//    "name":" ",
//    "desc":" ",
//    "price":" "
//  }
  

    constructor(private _http: Http) {
       
    }


    getData() {
        return this._http.get('http://localhost/api/product/read.php')
            .map(res => res.json());

    }

    postJson(data) {
        // console.log(data);
       
       var json=data; 
        // var jsonStr = data;
        // var json=JSON.stringify(jsonStr);
// json=JSON.parse(json);

        var headers = new Headers();

        headers.append('Content-Type', 'application/json');
        return this._http.post('http://localhost/api/product/create.php', json
        )
            .map((res)=>{
             
                res.json()
            });


    }
    updateData(value:any) {


        // console.log(value);
      
        var json = value;

        return this._http.post('http://localhost/api/product/update.php', json
        )
            .map(res => res.json());

    }
    deleteInfo(id) {
    //    console.log(id);
        var json = {
            "id": id
        };
        var headers = new Headers();

        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post('http://localhost/api/product/delete.php' , json)
            .map((res) => {
                console.log("res", typeof(res))
                res.json();
                console.log(res.json());
            });
    }

}



