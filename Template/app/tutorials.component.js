"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var core_2 = require('@angular/core');
var TutorialsComponent = (function () {
    function TutorialsComponent() {
        this.title = "Image from loremPixel.com";
        this.imglink = "http://lorempixel.com/400/200";
        this.Applyclass = true;
        this.ApplyBlue = true;
        this.ShowElement = true;
        this.color = 'green';
        this.colors = ['red', 'yellow', 'green'];
        this.childEvent = new core_2.EventEmitter();
    }
    TutorialsComponent.prototype.onChange = function (value) {
        this.childEvent.emit(value);
    };
    TutorialsComponent.prototype.onclick = function (value) {
        console.log(value);
    };
    TutorialsComponent = __decorate([
        core_1.Component({
            selector: 'my-tutorials',
            template: "<h2>Technologies</h2>\n           <h3>Header for Tutorials Component</h3>\n           <h4>{{title}}</h4>,\n           <img [src]=\"imglink\">\n           <div [class.myclass]=\"Applyclass\">Apply Class</div>\n           <div [style.color]=\"ApplyBlue? 'blue' : 'orange'\">This is style binding</div>\n           <button (mouseover)=\"onclick(demoInput.value)\">Click me</button>\n           <input type=\"text\" #demoInput>\n           <input type=\"text\" [(ngModel)]=\"fname\">\n           <input type=\"text\" [(ngModel)]=\"lname\">\n           Full name:{{fname}} {{lname}}\n           <p *ngIf=\"ShowElement\">My Story</p>\n           <div [ngSwitch]=\"color\">\n           <p *ngSwitchWhen=\"'green'\">Green color</p>\n            <p *ngSwitchWhen=\"'red'\">Red color</p>\n             <p *ngSwitchDefault>Invalid color</p>\n              \n           </div>\n           <ul>\n               <li *ngFor=\"let color of colors\">{{color}}</li>\n\n           </ul>\n           <h2>TutorialsComponent Header</h2>\n           <label>Enter text :</label>\n           <input type=\"text\" #ctext (keyup)=\"onChange(ctext.value)\">\n           <p>App component data is:{{parentData}}</p>",
            inputs: ["parentData"],
            outputs: ["childEvent"],
            styles: ["h3 {\n      color:red;\n    }", ".myclass {\n        color:green;\n        }"]
        }), 
        __metadata('design:paramtypes', [])
    ], TutorialsComponent);
    return TutorialsComponent;
}());
exports.TutorialsComponent = TutorialsComponent;
//# sourceMappingURL=tutorials.component.js.map