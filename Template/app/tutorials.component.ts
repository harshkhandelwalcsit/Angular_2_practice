import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
    selector: 'my-tutorials',
    template: `<h2>Technologies</h2>
           <h3>Header for Tutorials Component</h3>
           <h4>{{title}}</h4>,
           <img [src]="imglink">
           <div [class.myclass]="Applyclass">Apply Class</div>
           <div [style.color]="ApplyBlue? 'blue' : 'orange'">This is style binding</div>
           <button (mouseover)="onclick(demoInput.value)">Click me</button>
           <input type="text" #demoInput>
           <input type="text" [(ngModel)]="fname">
           <input type="text" [(ngModel)]="lname">
           Full name:{{fname}} {{lname}}
           <p *ngIf="ShowElement">My Story</p>
           <div [ngSwitch]="color">
           <p *ngSwitchWhen="'green'">Green color</p>
            <p *ngSwitchWhen="'red'">Red color</p>
             <p *ngSwitchDefault>Invalid color</p>
              
           </div>
           <ul>
               <li *ngFor="let color of colors">{{color}}</li>

           </ul>
           <h2>TutorialsComponent Header</h2>
           <label>Enter text :</label>
           <input type="text" #ctext (keyup)="onChange(ctext.value)">
           <p>App component data is:{{parentData}}</p>`,

    inputs: [`parentData`],
    outputs: [`childEvent`],
    styles: [`h3 {
      color:red;
    }`, `.myclass {
        color:green;
        }`]


})


export class TutorialsComponent {
    public title = "Image from loremPixel.com";
    public imglink = "http://lorempixel.com/400/200";
    public Applyclass = true;
    public ApplyBlue = true;

    public fname;
    public lname;
    public ShowElement = true;
    public color = 'green';
    public colors = ['red', 'yellow', 'green'];

    public parentData: string;
    public childEvent = new EventEmitter<string>();
    onChange(value: string) {
        this.childEvent.emit(value);
    }
    onclick(value) {


        console.log(value);
    }
}
