"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DepartmentListComponent = (function () {
    function DepartmentListComponent() {
        this.departments = [
            {
                "id": 1, "name": "Angular"
            },
            {
                "id": 2, "name": "Ruby"
            },
            {
                "id": 3, "name": "React"
            },
            {
                "id": 4, "name": "Node"
            },
            {
                "id": 5, "name": "Php"
            },
        ];
    }
    return DepartmentListComponent;
}());
DepartmentListComponent = __decorate([
    core_1.Component({
        selector: 'department-list',
        template: "<h3>Department List</h3>\n    <ul class=\"items\">\n    <li *ngFor=\"let department of departments\">\n    <span class=\"badge\">{{department.id}}</span>{{department.name}}</li>\n    </ul>"
    })
], DepartmentListComponent);
exports.DepartmentListComponent = DepartmentListComponent;
//# sourceMappingURL=department-list.component.js.map