import {Component} from '@angular/core';
import {ConfirmOptions, Position} from 'angular2-bootstrap-confirm';
import {Positioning} from 'angular2-bootstrap-confirm/position';
// Or if you're already using the @ng-bootstrap/ng-bootstrap module
// import {Positioning} from '@ng-bootstrap/ng-bootstrap/util/positioning';
// or if you're using the ng2-bootstrap module
// import {PositionService as Positioning} from 'ng2-bootstrap/components/position';
 
@Component({
  selector: 'my-app',
  providers: [ // you can pass both of these when bootstrapping the app to configure globally throughout your app
    ConfirmOptions,
     // this is required so you can use the bundled position service rather than rely on the `@ng-bootstrap/ng-bootstrap` module
    {provide: Position, useClass: Positioning}
  ],
  template: `
    <button
      class="btn btn-default"
      mwlConfirm
      [title]="title"
      [message]="message"
      placement="left"
      (confirm)="confirmClicked = true"
      (cancel)="cancelClicked = true"
      [(isOpen)]="isOpen">
      Click me!
    </button>
  `
})
export class MyComponent {
  public title: string = 'Popover title';
  public message: string = 'Popover description';
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;
  public isOpen: boolean = false;
}