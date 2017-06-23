import { Component,OnInit } from '@angular/core';
import { HTTPTestService } from './http-test.service';
import { Observable } from "rxjs/Observable";


@Component({
  selector: 'http-test',
  template: `
 <p>output:{{postData}}</p>
<my-form></my-form>
 

  <table class="table table-inverse">
  <thead>
    <tr>
      <th>#</th>
      <th>ID</th>
      <th>NAME</th>
      <th>DESCRIPTION</th>
        <th>PRICE</th>
          <th>CREATED_DATE</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td *ngFor="let a of info">{{a[0]._id}}</td>
      <td *ngFor="let a of info">{{a[0].name}}</td>
      <td *ngFor="let a of info">{{a[0].desc}}</td>
      <td *ngFor="let a of info">{{a[0].price}}</td>
      <td *ngFor="let a of info">{{a[0].created_date}}</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td *ngFor="let a of info">{{a[1]._id}}</td>
      <td *ngFor="let a of info">{{a[1].name}}</td>
      <td *ngFor="let a of info">{{a[1].desc}}</td>
      <td *ngFor="let a of info">{{a[1].price}}</td>
      <td *ngFor="let a of info">{{a[1].created_date}}</td>
    </tr>
    <tr>
      <th scope="row">3</th>
     <td *ngFor="let a of info">{{a[2]._id}}</td>
      <td *ngFor="let a of info">{{a[2].name}}</td>
      <td *ngFor="let a of info">{{a[2].desc}}</td>
      <td *ngFor="let a of info">{{a[2].price}}</td>
      <td *ngFor="let a of info">{{a[2].created_date}}</td>
    </tr>
    <tr>
      <th scope="row">4</th>
     <td *ngFor="let a of info">{{a[3]._id}}</td>
      <td *ngFor="let a of info">{{a[3].name}}</td>
      <td *ngFor="let a of info">{{a[3].desc}}</td>
      <td *ngFor="let a of info">{{a[3].price}}</td>
      <td *ngFor="let a of info">{{a[3].created_date}}</td>
    </tr>
    <tr>
      <th scope="row">5</th>
     <td *ngFor="let a of info">{{a[4]._id}}</td>
      <td *ngFor="let a of info">{{a[4].name}}</td>
      <td *ngFor="let a of info">{{a[4].desc}}</td>
      <td *ngFor="let a of info">{{a[4].price}}</td>
      <td *ngFor="let a of info">{{a[4].created_date}}</td>
    </tr>
  </tbody>
</table>`,
  providers: [HTTPTestService],


})
export class HTTPTestComponent{
  getData: string;
  postData: string;
 
  public info = [];


  constructor(private _httpService: HTTPTestService) {
    this._httpService.getCurrentTime()
      .subscribe(
      (data) => {
        this.getData = JSON.stringify(data),
          this.info.push(data);

      },

      error => alert(error),
      () => console.log("Finished")
      );

  }
  

}
