"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var angular2_bootstrap_confirm_1 = require("angular2-bootstrap-confirm");
var position_1 = require("angular2-bootstrap-confirm/position");
// Or if you're already using the @ng-bootstrap/ng-bootstrap module
// import {Positioning} from '@ng-bootstrap/ng-bootstrap/util/positioning';
// or if you're using the ng2-bootstrap module
// import {PositionService as Positioning} from 'ng2-bootstrap/components/position';
var MyComponent = (function () {
    function MyComponent() {
        this.title = 'Popover title';
        this.message = 'Popover description';
        this.confirmClicked = false;
        this.cancelClicked = false;
        this.isOpen = false;
    }
    MyComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            providers: [
                angular2_bootstrap_confirm_1.ConfirmOptions,
                // this is required so you can use the bundled position service rather than rely on the `@ng-bootstrap/ng-bootstrap` module
                { provide: angular2_bootstrap_confirm_1.Position, useClass: position_1.Positioning }
            ],
            template: "\n    <button\n      class=\"btn btn-default\"\n      mwlConfirm\n      [title]=\"title\"\n      [message]=\"message\"\n      placement=\"left\"\n      (confirm)=\"confirmClicked = true\"\n      (cancel)=\"cancelClicked = true\"\n      [(isOpen)]=\"isOpen\">\n      Click me!\n    </button>\n  "
        })
    ], MyComponent);
    return MyComponent;
}());
exports.MyComponent = MyComponent;
//# sourceMappingURL=app.component.js.map