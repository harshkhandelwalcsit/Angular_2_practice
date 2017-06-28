import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HTTPTestService } from './http-test.service';
import { Observable } from "rxjs/Observable";
import { Http, HttpModule } from '@angular/http';

@Component({
  selector: 'http-test',
  templateUrl: `app/http-test.component.html`,
  providers: [HTTPTestService],


})
export class HTTPTestComponent implements OnInit {
  getData: string;
  postData: string;
 public data={
   "id":" ",
   "name":" ",
   "desc":" ",
   "price":" "
 }
  // public name;
  // public desc;
  // public price;
  public info = [];

  ngOnInit() {

    this.getProductListing();
     
  }
   onSubmit(value: any) {

   
  
    
    this._httpService.postJson(value) .subscribe(
      (data) => {
         
        this.getProductListing();
      },

      error => alert(error),
      () => console.log("Submit Data")
      );

  }

  getProductListing() {
    this._httpService.getData()
      .subscribe(
      (data) => {

        this.info = data;

      },

      error => alert(error),
      () => console.log("GeTCurrent List")
      );
  }
  onEdit(value: any) {

    console.log(value);
    this.data.id=value._id;
this.data.name=value.name;
this.data.desc=value.desc;
this.data.price=value.price;
   
   
     
  }
  onUpdate(value:any){

     this._httpService.updateData(this.data).subscribe(
            (data) => {
            
        this.getProductListing();
     },err=>{
       console.log(err);
     });

  }

  deleteData(item_id) {

    this._httpService.deleteInfo(item_id)
      .subscribe(
      (data) => {
         
        this.getProductListing();
      },

      error => alert(error),
      () => console.log("Delete Data")
      );
  }





  constructor(private _httpService: HTTPTestService) {


  }


}
