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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_test_service_1 = require("./http-test.service");
var HTTPTestComponent = (function () {
    function HTTPTestComponent(_httpService) {
        var _this = this;
        this._httpService = _httpService;
        this.info = [];
        this._httpService.getCurrentTime()
            .subscribe(function (data) {
            _this.getData = (data),
                _this.info.push(data);
        }, function (error) { return alert(error); }, function () { return console.log("Finished"); });
    }
    HTTPTestComponent.prototype.onEdit1 = function () {
        console.log(this.getData[0]);
        console.log(this.info[0][0]);
    };
    HTTPTestComponent.prototype.onEdit2 = function () {
        console.log(this.getData[1]);
    };
    HTTPTestComponent.prototype.onEdit3 = function () {
        console.log(this.getData[2]);
    };
    HTTPTestComponent.prototype.onEdit4 = function () {
        console.log(this.getData[3]);
    };
    HTTPTestComponent.prototype.onEdit5 = function () {
        console.log(this.getData[4]);
    };
    HTTPTestComponent.prototype.deleteData5 = function () {
        console.log("h");
    };
    HTTPTestComponent.prototype.deleteData4 = function () {
        console.log("a");
    };
    HTTPTestComponent.prototype.deleteData3 = function () {
        console.log("r");
    };
    HTTPTestComponent.prototype.deleteData2 = function () {
        console.log("s");
    };
    HTTPTestComponent.prototype.deleteData1 = function () {
        console.log("h");
    };
    return HTTPTestComponent;
}());
HTTPTestComponent = __decorate([
    core_1.Component({
        selector: 'http-test',
        template: "\n  \n <p>output:{{postData}}</p>\n\n\n\n  <table class=\"table table-inverse\">\n  <thead>\n    <tr>\n      <th>#</th>\n      <th>ID</th>\n      <th>NAME</th>\n      <th>DESCRIPTION</th>\n        <th>PRICE</th>\n          <th>CREATED_DATE</th>\n          <th>ACTIONS</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr >\n      <th scope=\"row\">1</th>\n      <td *ngFor=\"let a of info\">{{a[0]._id}}</td>\n      <td *ngFor=\"let a of info\">{{a[0].name}}</td>\n      <td *ngFor=\"let a of info\">{{a[0].desc}}</td>\n      <td *ngFor=\"let a of info\">{{a[0].price}}</td>\n      <td *ngFor=\"let a of info\">{{a[0].created_date}}</td>\n    \n      <span (click)=\"onEdit1()\"  style=\" padding:20px\" class=\"glyphicon glyphicon-pencil\"></span>\n       <span (click)=\"deleteData1()\" class=\"glyphicon glyphicon-trash\"></span>\n    </tr>\n    <tr >\n      <th scope=\"row\">2</th>\n      <td *ngFor=\"let a of info\">{{a[1]._id}}</td>\n      <td *ngFor=\"let a of info\">{{a[1].name}}</td>\n      <td *ngFor=\"let a of info\">{{a[1].desc}}</td>\n      <td *ngFor=\"let a of info\">{{a[1].price}}</td>\n      <td *ngFor=\"let a of info\">{{a[1].created_date}}</td>\n           <span (click)=\"onEdit2()\" style=\" padding:20px\" class=\"glyphicon glyphicon-pencil\"></span>\n    <span (click)=\"deleteData2()\" class=\"glyphicon glyphicon-trash\"></span>\n    </tr>\n    <tr>\n      <th scope=\"row\">3</th>\n     <td *ngFor=\"let a of info\">{{a[2]._id}}</td>\n      <td *ngFor=\"let a of info\">{{a[2].name}}</td>\n      <td *ngFor=\"let a of info\">{{a[2].desc}}</td>\n      <td *ngFor=\"let a of info\">{{a[2].price}}</td>\n      <td *ngFor=\"let a of info\">{{a[2].created_date}}</td>\n     <span (click)=\"onEdit3()\" style=\" padding:20px\" class=\"glyphicon glyphicon-pencil\"></span>\n         <span (click)=\"deleteData3()\" class=\"glyphicon glyphicon-trash\"></span>\n    </tr>\n    <tr>\n      <th scope=\"row\">4</th>\n     <td *ngFor=\"let a of info\">{{a[3]._id}}</td>\n      <td *ngFor=\"let a of info\">{{a[3].name}}</td>\n      <td *ngFor=\"let a of info\">{{a[3].desc}}</td>\n      <td *ngFor=\"let a of info\">{{a[3].price}}</td>\n      <td *ngFor=\"let a of info\">{{a[3].created_date}}</td>\n       <span (click)=\"onEdit4()\" style=\" padding:20px\" class=\"glyphicon glyphicon-pencil\"></span>\n   <span (click)=\"deleteData4()\" class=\"glyphicon glyphicon-trash\"></span>\n    </tr>\n    <tr >\n      <th scope=\"row\">5</th>\n     <td *ngFor=\"let a of info\">{{a[4]._id}}</td>\n      <td *ngFor=\"let a of info\">{{a[4].name}}</td>\n      <td *ngFor=\"let a of info\">{{a[4].desc}}</td>\n      <td *ngFor=\"let a of info\">{{a[4].price}}</td>\n      <td *ngFor=\"let a of info\">{{a[4].created_date}}</td>\n       <span (click)=\"onEdit5()\" style=\" padding:20px\" class=\"glyphicon glyphicon-pencil\"></span>\n          <span (click)=\"deleteData5()\" class=\"glyphicon glyphicon-trash\"></span>\n\n  </tbody>\n</table>",
        providers: [http_test_service_1.HTTPTestService],
    }),
    __metadata("design:paramtypes", [http_test_service_1.HTTPTestService])
], HTTPTestComponent);
exports.HTTPTestComponent = HTTPTestComponent;
//# sourceMappingURL=http-test.component.js.map