import {
  Component,
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
  group
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
     trigger('lightsOnOff',[
       state('off',style({
         backgroundColor: 'black'
       })),
       state('on',style({
         backgroundColor: 'white'
       })),
       transition('off => on',[animate('2s ease-in',style({transform:'rotate(180deg)'}))]),
             transition('on => off',[animate('2s ease-out',style({transform:'rotate(-180deg)'}))]),
     ]),
     trigger('heightTrigger',[
       state('noHeight',style({
  height:0
       })),
       state('fullHeight',style({
        height:'*'
       })),
       transition('noHeight <=> fullHeight',[animate('2s ')]),
           
     ])
  ]
})
export class AppComponent {
  title = 'Animation App';
  roomState: string ="off";
  heightState: string="fullHeight";
  toggleLights(){

    this.roomState=(this.roomState==="off") ? "on" : "off";
  }
    toggleHeights(){

    this.heightState=(this.heightState==="fullHeight") ? "noHeight" : "fullHeight";
  }
  animationStarted(event : any){
 console.log('Start Animation');
  console.log(event);
 console.log(event.fromState);
  console.log(event.toState);
   console.log(event.totalTime);
  
  }

   animationDone(event : any){
 
 console.log(event.fromState);
  console.log(event.toState);
   console.log(event.totalTime);
   console.log('Animation Completed');
  
  }
}
