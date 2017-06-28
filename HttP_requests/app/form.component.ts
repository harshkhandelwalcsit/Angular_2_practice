import { Component  ,OnInit,Input} from '@angular/core';
import { HTTPTestService } from "./http-test.service";
import { Observable } from "rxjs/Observable";
import { HTTPTestComponent } from "./http-test.component";



@Component({
  selector: 'my-form',
  templateUrl: `app/myform.component.html`,
 
providers: [HTTPTestService],

})
export class FromComponent {
  public data=[];

 public mydata:Array<any>;
public TableData:string;
onSubmit(value:any )
  {
 console.log();

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