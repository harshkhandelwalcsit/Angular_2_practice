import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Headers } from '@angular/http';
import { Observable } from "rxjs/Observable";

@Injectable()

export class HTTPTestService {
    postJson$: Observable<any>;

    public searchID;

    constructor(private _http: Http) {
        this.searchID = { _id: '5912e701ec8f4b040018faea', name: 'product 4' };
    }


    getCurrentTime() {
        return this._http.get('https://accedo-video-app-api.herokuapp.com/getProducts')
            .map(res => res.json());

    }

    postJson(data) {
        console.log(data);
        var json = data;

        var headers = new Headers();

        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post('https://accedo-video-app-api.herokuapp.com/addProduct', json
        )
            .map(res => res.json());


    }
    updateData(value: any) {

        console.log(value);
        var json = JSON.stringify(value);
console.log(json);
        return this._http.post('https://accedo-video-app-api.herokuapp.com/updateProduct', json
        )
            .map(res => res.json());

    }
    deleteInfo(_id) {
        var json = {
            "_id": _id
        };
        var headers = new Headers();

        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.delete('https://accedo-video-app-api.herokuapp.com/deleteProduct/' + _id, json
        )
            .map((res) => {
                res.json();
            });
    }

}



