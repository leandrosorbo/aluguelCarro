"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.ReservationPage = void 0;
var core_1 = require("@angular/core");
var ReservationPage = /** @class */ (function () {
    function ReservationPage(alertController, storage) {
        this.alertController = alertController;
        this.storage = storage;
        //cria o objeto car
        this.cars = [
            {
                name: 'GRUPO A - CLICK CAR',
                img: 'https://www.autossegredos.com.br/wp-content/uploads/2020/04/fiat-mobi-easy-1280x720.jpg',
                completed: false,
                info: 'Mobi Like ou Similar',
                km: 'KM Livre',
                desconto: 'Desconto Pré Agendamento',
                detalhes: '5 Pessoas - Ar Condicionado - Mecanico - ABS - 2 Malas',
                valor: 'R$ 97,00' //colocar código de valor
            },
            {
                name: 'GRUPO J - SUV ESPECIAL',
                img: 'https://s2.glbimg.com/7lMJLzC9w2nPJ2FEDhwqxL1gUTg=/512x320/smart/e.glbimg.com/og/ed/f/original/2020/08/03/jeep_compass_s_1.jpeg',
                completed: false,
                info: 'Mobi Like ou Similar',
                km: 'KM Livre',
                desconto: 'Desconto Pré Agendamento',
                detalhes: '5 Pessoas - Ar Condicionado - Automático - ABS - 4 Malas',
                valor: 'R$ 97,00' //colocar código de valor
            },
        ];
        //storage
        this.key = 'username';
        this.filteredCars = this.cars.slice();
        this.selectedSegment = 'current';
    }
    ReservationPage.prototype.ngOnInit = function () {
    };
    ReservationPage.prototype.segmentChanged = function () {
        if (this.selectedSegment === 'previous') {
            this.filteredCars = this.cars.filter(function (car) {
                return car.completed;
            });
        }
        else {
            this.filteredCars = this.cars.filter(function (car) {
                return !car.completed;
            });
        }
    };
    ReservationPage.prototype.presentAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Carro confirmado',
                            message: 'Você deseja confirmar a escolha desse carro?',
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ReservationPage.prototype.detailsAlert = function (car) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: '' + car.name + '',
                            message: '<strong>Informação:</strong> <p>' + car.info + '</p>' +
                                '<li>  ' + car.km + ' </li>' +
                                '<li> ' + car.desconto + ' </li>' +
                                '<p><strong>Destalhes:</strong></p> <p>' + car.detalhes + '</p>' +
                                '<p> Valor:' + car.valor + '</p>',
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ReservationPage.prototype.saveData = function () {
        console.log('selectedSegment', this.selectedSegment);
        this.storage.set('selectedSegment', this.selectedSegment);
    };
    ReservationPage = __decorate([
        core_1.Component({
            selector: 'app-reservation',
            templateUrl: './reservation.page.html',
            styleUrls: ['./reservation.page.scss']
        })
    ], ReservationPage);
    return ReservationPage;
}());
exports.ReservationPage = ReservationPage;
