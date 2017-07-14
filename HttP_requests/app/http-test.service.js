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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var http_2 = require("@angular/http");
var HTTPTestService = (function () {
    //   public information={
    //    "id":" ",
    //    "name":" ",
    //    "desc":" ",
    //    "price":" "
    //  }
    function HTTPTestService(_http) {
        this._http = _http;
    }
    HTTPTestService.prototype.getData = function () {
        return this._http.get('http://localhost/api/product/read.php')
            .map(function (res) { return res.json(); });
    };
    HTTPTestService.prototype.postJson = function (data) {
        // console.log(data);
        var json = data;
        // var jsonStr = data;
        // var json=JSON.stringify(jsonStr);
        // json=JSON.parse(json);
        var headers = new http_2.Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post('http://localhost/api/product/create.php', json)
            .map(function (res) {
            res.json();
        });
    };
    HTTPTestService.prototype.updateData = function (value) {
        // console.log(value);
        var json = value;
        return this._http.post('http://localhost/api/product/update.php', json)
            .map(function (res) { return res.json(); });
    };
    HTTPTestService.prototype.deleteInfo = function (id) {
        //    console.log(id);
        var json = {
            "id": id
        };
        var headers = new http_2.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post('http://localhost/api/product/delete.php', json)
            .map(function (res) {
            console.log("res", typeof (res));
            res.json();
            console.log(res.json());
        });
    };
    return HTTPTestService;
}());
HTTPTestService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HTTPTestService);
exports.HTTPTestService = HTTPTestService;
//# sourceMappingURL=http-test.service.js.map