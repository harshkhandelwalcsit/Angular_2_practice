import { Component } from '@angular/core';

import { TutorialsComponent } from './tutorials.component'

@Component({
  selector: 'my-app',
  template: `<h1>Ranosys</h1>
          
            <h3>Header for App component</h3>
            <h2>Appcomponent Header</h2>
           <label>Enter text :</label>
           <input type="text" #ptext (keyup)="0">
           <p>TutorialsComponent data is:{{childData}}</p>
             <my-tutorials (childEvent)="childData=$event"[parentData]="ptext.value"></my-tutorials> `,
  styles: [`h3 {
    color:blue;
  }`],

  directives: [TutorialsComponent]
})
export class AppComponent {
  public childData: string;
}
