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
        this._httpService = _httpService;
        this.info = [];
        this.data = {
            "id": "",
            "name": " ",
            "description": " ",
            "price": " ",
            "category_id": " ",
            "category_name": " "
        };
    }
    // public name;
    // public desc;
    // public price;
    HTTPTestComponent.prototype.ngOnInit = function () {
        this.getProductListing();
    };
    HTTPTestComponent.prototype.onSubmit = function (value) {
        var _this = this;
        console.log(value);
        this._httpService.postJson(value).subscribe(function (data) {
            _this.getProductListing();
        }, function (error) { console.log(error); }, function () { return console.log("Submit Data"); });
    };
    HTTPTestComponent.prototype.getProductListing = function () {
        var _this = this;
        this._httpService.getData()
            .subscribe(function (data) {
            _this.info = data.records;
            console.log(_this.info[0]);
        }, function (error) { return alert(error); }, function () { return console.log("GeTCurrent List"); });
    };
    HTTPTestComponent.prototype.onEdit = function (value) {
        console.log(value);
        this.data.id = value.id;
        this.data.name = value.name;
        this.data.description = value.description;
        this.data.price = value.price;
        this.data.category_id = value.category_id;
        this.data.category_name = value.category_name;
    };
    HTTPTestComponent.prototype.onUpdate = function (value) {
        var _this = this;
        this._httpService.updateData(this.data).subscribe(function (data) {
            _this.getProductListing();
        }, function (err) {
            console.log(err);
        });
    };
    HTTPTestComponent.prototype.deleteData = function (id) {
        var _this = this;
        if (confirm("Press a button!")) {
            this._httpService.deleteInfo(id)
                .subscribe(function (data) {
                _this.getProductListing();
            }, function (error) { return alert(error); }, function () { return console.log("Delete Data"); });
        }
        else {
            alert("You pressed Cancel!");
        }
    };
    return HTTPTestComponent;
}());
HTTPTestComponent = __decorate([
    core_1.Component({
        selector: 'http-Test',
        templateUrl: "app/http-test.component.html",
        providers: [http_test_service_1.HTTPTestService],
    }),
    __metadata("design:paramtypes", [http_test_service_1.HTTPTestService])
], HTTPTestComponent);
exports.HTTPTestComponent = HTTPTestComponent;
//# sourceMappingURL=http-test.component.js.map