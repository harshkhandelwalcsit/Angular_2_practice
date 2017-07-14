import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { HTTPTestService } from './http-test.service';
import { Observable } from "rxjs/Observable";
import { Http, HttpModule } from '@angular/http';

@Component({
  selector: 'http-Test',
  templateUrl: `app/http-test.component.html`,
  providers: [HTTPTestService],


})
export class HTTPTestComponent implements OnInit {

  getData: string;
  postData: string;
  public info = [];
  public data = {
    "id": "",
    "name": " ",
    "description": " ",
    "price": " ",
    "category_id": " ",
    "category_name": " "
  }
  // public name;
  // public desc;
  // public price;


  ngOnInit() {

    this.getProductListing();

  }
  onSubmit(value: any) {


    console.log(value);


    this._httpService.postJson(value).subscribe(
      (data) => {

        this.getProductListing();
      },

      error => {console.log(error)},
      () => console.log("Submit Data")
    );


  }

  getProductListing() {
    this._httpService.getData()
      .subscribe(
      (data) => {

        this.info = data.records;

         console.log(this.info[0]);
      },

      error => alert(error),
      () => console.log("GeTCurrent List")
      );
  }
  onEdit(value: any) 
  {
    
console.log(value);
    this.data.id = value.id;
    this.data.name = value.name;
    this.data.description = value.description;
    this.data.price = value.price;
    this.data.category_id = value.category_id;
    this.data.category_name = value.category_name;
  
  
  }
  
  onUpdate(value: any) {

    this._httpService.updateData(this.data).subscribe(
      (data) => {

        this.getProductListing();
      }, err => {
        console.log(err);
      });

  }

  deleteData(id) {
if(confirm("Press a button!")){


 this._httpService.deleteInfo(id)
      .subscribe(
      (data) => {

        this.getProductListing();
      },

      error => alert(error),
      () => console.log("Delete Data")
      );
}
  else{
  alert("You pressed Cancel!") ;
  } 
  }





  constructor(private _httpService: HTTPTestService) {


  }


}
