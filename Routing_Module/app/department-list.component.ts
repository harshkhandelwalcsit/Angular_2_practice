import { Component,OnInit } from '@angular/core';
import { Router ,ActivatedRoute,Params} from '@angular/router';


@Component({
    selector: 'department-list',
    template: `<h3>Department List</h3>
 
  
<div style="padding:3px" (click)="onSelect(department)" [class.selected]="isSelected(department)" *ngFor="let department of departments">

<span class="badge">{{department.id}}</span>
<button style="width:10%" class="btn btn-primary" type="button">

 {{department.name}}
</button>

<div>
  `
})



export class DepartmentListComponent implements OnInit {
    public selectedId;
  constructor(private router:Router,private route:ActivatedRoute){}

    departments=[
        {
        "id":1,"name":"Angular"
    },
       {
        "id":2,"name":"Ruby"
    },
    
       {
        "id":3,"name":"React"
    },
    
       {
        "id":4,"name":"Node"
    },
    
       {
        "id":5,"name":"Php"
    },
 ]
 ngOnInit(){
   this.route.params.subscribe((params:Params)=>{
       console.log("hi1")
let id=parseInt(params['id']);
this.selectedId=id;

   })

}

    onSelect(department){
//this.router.navigate(['/departments',department.id]);
this.router.navigate([department.id],{relativeTo:this.route});
    }
 isSelected(department){return department.id === this.selectedId }

}


