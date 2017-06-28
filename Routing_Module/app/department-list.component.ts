import { Component } from '@angular/core';



@Component({
    selector: 'department-list',
    template: `<h3>Department List</h3>
    <ul class="items">
    <li *ngFor="let department of departments">
    <span class="badge">{{department.id}}</span>{{department.name}}</li>
    </ul>`
})



export class DepartmentListComponent {

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
 }
