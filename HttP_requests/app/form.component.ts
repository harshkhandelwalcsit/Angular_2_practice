import { Component  ,OnInit} from '@angular/core';
import { HTTPTestService } from "./http-test.service";
import { Observable } from "rxjs/Observable";




@Component({
  selector: 'my-form',
  templateUrl: `app/myform.component.html`,
  inputs:[`TableData`],
providers: [HTTPTestService],

})
export class FromComponent {
  public data=[];
public TableData:string;
onSubmit(value:any )
  {


    console.log(value);
    

 
    this.data.push(value);
   
    
      this.myService.postJson(value).subscribe(res=>{
       console.log("success",res);
     },err=>{
       console.log(err);
     });
    
    }
   
 public constructor(private myService: HTTPTestService) {
   
}

  

}