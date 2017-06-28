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

  public info = [];

  ngOnInit() {

    this.getProductListing();
  }

  getProductListing() {
    this._httpService.getCurrentTime()
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
    
    //   this._httpService.updateData(value).subscribe(
    //         (data) => {
    //     this.getProductListing();
    //  },err=>{
    //    console.log(err);
    //  });

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
