import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HTTPTestService } from './http-test.service';
import { Observable } from "rxjs/Observable";
import { Http, HttpModule } from '@angular/http';

@Component({
  selector: 'http-test',
  template: `
  
 <p>output:{{postData}}</p>



  <table class="table table-inverse">
  <thead>
    <tr>
      <th>#</th>
      <th>ID</th>
      <th>NAME</th>
      <th>DESCRIPTION</th>
        <th>PRICE</th>
          <th>CREATED_DATE</th>
          <th>ACTIONS</th>
    </tr>
  </thead>
  <tbody>
    <tr >
      <th scope="row">1</th>
      <td *ngFor="let a of info">{{a[0]._id}}</td>
      <td *ngFor="let a of info">{{a[0].name}}</td>
      <td *ngFor="let a of info">{{a[0].desc}}</td>
      <td *ngFor="let a of info">{{a[0].price}}</td>
      <td *ngFor="let a of info">{{a[0].created_date}}</td>
    
      <span (click)="onEdit1()"  style=" padding:20px" class="glyphicon glyphicon-pencil"></span>
       <span (click)="deleteData1()" class="glyphicon glyphicon-trash"></span>
    </tr>
    <tr >
      <th scope="row">2</th>
      <td *ngFor="let a of info">{{a[1]._id}}</td>
      <td *ngFor="let a of info">{{a[1].name}}</td>
      <td *ngFor="let a of info">{{a[1].desc}}</td>
      <td *ngFor="let a of info">{{a[1].price}}</td>
      <td *ngFor="let a of info">{{a[1].created_date}}</td>
           <span (click)="onEdit2()" style=" padding:20px" class="glyphicon glyphicon-pencil"></span>
    <span (click)="deleteData2()" class="glyphicon glyphicon-trash"></span>
    </tr>
    <tr>
      <th scope="row">3</th>
     <td *ngFor="let a of info">{{a[2]._id}}</td>
      <td *ngFor="let a of info">{{a[2].name}}</td>
      <td *ngFor="let a of info">{{a[2].desc}}</td>
      <td *ngFor="let a of info">{{a[2].price}}</td>
      <td *ngFor="let a of info">{{a[2].created_date}}</td>
     <span (click)="onEdit3()" style=" padding:20px" class="glyphicon glyphicon-pencil"></span>
         <span (click)="deleteData3()" class="glyphicon glyphicon-trash"></span>
    </tr>
    <tr>
      <th scope="row">4</th>
     <td *ngFor="let a of info">{{a[3]._id}}</td>
      <td *ngFor="let a of info">{{a[3].name}}</td>
      <td *ngFor="let a of info">{{a[3].desc}}</td>
      <td *ngFor="let a of info">{{a[3].price}}</td>
      <td *ngFor="let a of info">{{a[3].created_date}}</td>
       <span (click)="onEdit4()" style=" padding:20px" class="glyphicon glyphicon-pencil"></span>
   <span (click)="deleteData4()" class="glyphicon glyphicon-trash"></span>
    </tr>
    <tr >
      <th scope="row">5</th>
     <td *ngFor="let a of info">{{a[4]._id}}</td>
      <td *ngFor="let a of info">{{a[4].name}}</td>
      <td *ngFor="let a of info">{{a[4].desc}}</td>
      <td *ngFor="let a of info">{{a[4].price}}</td>
      <td *ngFor="let a of info">{{a[4].created_date}}</td>
       <span (click)="onEdit5()" style=" padding:20px" class="glyphicon glyphicon-pencil"></span>
          <span (click)="deleteData5()" class="glyphicon glyphicon-trash"></span>

  </tbody>
</table>`,
  providers: [HTTPTestService],


})
export class HTTPTestComponent {
  getData: string;
  postData: string;

  public info = [];


  onEdit1() {

    console.log(this.getData[0]);
    console.log(this.info[0][0]);
  }
  onEdit2() {

    console.log(this.getData[1]);
  }
  onEdit3() {

    console.log(this.getData[2]);
  }
  onEdit4() {

    console.log(this.getData[3]);
  }
  onEdit5() {

    console.log(this.getData[4]);
  }
deleteData5(){
console.log("h");
}
deleteData4(){
 console.log("a"); 
}

deleteData3(){
  console.log("r");
}

deleteData2(){
  console.log("s");
}

deleteData1(){
  console.log("h");
}





  constructor(private _httpService: HTTPTestService) {
    this._httpService.getCurrentTime()
      .subscribe(
      (data) => {
        this.getData = (data),
          this.info.push(data);

      },

      error => alert(error),
      () => console.log("Finished")
      );

  }


}
