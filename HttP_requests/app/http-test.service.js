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
    function HTTPTestService(_http) {
        this._http = _http;
        this.information = "harsh";
    }
    HTTPTestService.prototype.getCurrentTime = function () {
        return this._http.get('https://accedo-video-app-api.herokuapp.com/getProducts')
            .map(function (res) { return res.json(); });
    };
    HTTPTestService.prototype.postJson = function (data) {
        console.log(data);
        var json = data;
        var headers = new http_2.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post('https://accedo-video-app-api.herokuapp.com/addProduct', json)
            .map(function (res) { return res.json(); });
    };
    //     updateData(value:any) {
    //         console.log(value);
    //         var json = JSON.stringify(value);
    // console.log(json);
    //         return this._http.post('https://accedo-video-app-api.herokuapp.com/updateProduct', json
    //         )
    //             .map(res => res.json());
    //     }
    HTTPTestService.prototype.deleteInfo = function (_id) {
        this.information = _id;
        var json = {
            "_id": _id
        };
        var headers = new http_2.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.delete('https://accedo-video-app-api.herokuapp.com/deleteProduct/' + _id, json)
            .map(function (res) {
            res.json();
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