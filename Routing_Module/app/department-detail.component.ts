import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Router,Params } from '@angular/router';



@Component ({
   
    template: `<h3>Ur Selected Deprtmnt wth id = {{departmentID}}</h3>
                <a (click)="goPrevious()" >Previous</a>
                <a (click)="goNext()">Next</a>
                <p>
                <button (click)="goBack()">
                Back
                </button>
                </p>`
})



export class DepartmentDetailComponent implements OnInit { 
    public departmentID;
    constructor(private route:ActivatedRoute,private router:Router){}

    // ngOnInit()
    // {
    //     console.log("hi")
    //     let id=parseInt(this.route.snapshot.params['id']);
    //     console.log("id", id)
    //     this.departmentID=id;
    // }
ngOnInit(){
   this.route.params.subscribe((params:Params)=>{
       console.log("hi1")
let id=parseInt(params['id']);
this.departmentID=id;

   })

}
    goPrevious(){
       let previousId=this.departmentID - 1;
        this.router.navigate(['/departments',previousId]);
    }

    goNext(){
       let nextId=this.departmentID + 1;
        this.router.navigate(['/departments',nextId]);
    }

    goBack(){
let selectedId=this.departmentID? this.departmentID : null;
//this.router.navigate(['/departments',{id:selectedId}])
this.router.navigate(['../',{id:selectedId}],{relativeTo:this.route});
    }
}
