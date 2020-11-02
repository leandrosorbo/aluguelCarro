"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HomePage = void 0;
var core_1 = require("@angular/core");
var HomePage = /** @class */ (function () {
    function HomePage(platform1, platform2, storage) {
        var _this = this;
        this.platform1 = platform1;
        this.platform2 = platform2;
        this.storage = storage;
        this.key = 'username';
        this.selectedDateString1 = new Date().toISOString();
        this.minDateInput = new Date().toISOString();
        this.maxDateInput = new Date().toISOString();
        this.selectedDateString2 = new Date().toISOString();
        this.minDateOutput = new Date().toISOString();
        this.maxDateOutput = new Date().toISOString();
        this.platform1.ready().then(function () {
            var date1 = new Date();
            date1.setDate(date1.getDate() - 0);
            _this.minDateInput = date1.toISOString();
            date1 = new Date();
            date1.setDate(date1.getDate() + 365);
            _this.maxDateInput = date1.toISOString();
        });
        this.platform2.ready().then(function () {
            var date2 = new Date();
            date2.setDate(date2.getDate() - 0);
            _this.minDateInput = date2.toISOString();
            date2 = new Date();
            date2.setDate(date2.getDate() + 365);
            _this.maxDateOutput = date2.toISOString();
        });
    }
    HomePage.prototype.saveData = function () {
        console.log('select1', this.select1, 'data1', this.data1, 'select2', this.select2, 'data2', this.data2);
        //this.storage.set(this.key, '');
        this.storage.set('select1', this.select1);
        this.storage.set('data1', this.data1);
        this.storage.set('select2', this.select2);
        this.storage.set('data2', this.data2);
    };
    HomePage = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss']
        })
    ], HomePage);
    return HomePage;
}());
exports.HomePage = HomePage;
