webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api-calls.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiCallsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApiCallsService = /** @class */ (function () {
    function ApiCallsService(_http) {
        var _this = this;
        this._http = _http;
        this.baseUrl = 'https://restcountries.eu/rest/v2/';
        this.getSelectedRegion = function (regionName) {
            debugger;
            var response = _this._http.get(_this.baseUrl + 'region/' + regionName);
            return response;
        };
        this.getSingleCountryName = function (singleName) {
            var response = _this._http.get(_this.baseUrl + 'name/' + singleName + '?fullText=true');
            return response;
        };
        this.getSelectedCurrency = function (currencyCode) {
            debugger;
            var response = _this._http.get(_this.baseUrl + 'currency/' + currencyCode);
            return response;
        };
        this.getSelectedLanguage = function (languageCode) {
            debugger;
            var response = _this._http.get(_this.baseUrl + 'lang/' + languageCode);
            return response;
        };
        console.log("Api Call Service Called");
    }
    ApiCallsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ApiCallsService);
    return ApiCallsService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".margin-top-20 {\r\n    margin-top: 2rem;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-info\">\n\t<a class=\"navbar-brand\" [routerLink]=\"['/regions-view']\">All Regions</a>\n\t<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\"\n\t aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\t<div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n\t\t<ul class=\"navbar-nav\">\n\t\t\t<li class=\"nav-item active\">\n\t\t\t\t<a class=\"nav-link\" [routerLink]=\"['/regions-view']\">Home <span class=\"sr-only\">(current)</span></a>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n</nav>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__regions_view_regions_view_component__ = __webpack_require__("./src/app/regions-view/regions-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__country_view_country_view_component__ = __webpack_require__("./src/app/country-view/country-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__single_country_view_single_country_view_component__ = __webpack_require__("./src/app/single-country-view/single-country-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__api_calls_service__ = __webpack_require__("./src/app/api-calls.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__currency_view_currency_view_component__ = __webpack_require__("./src/app/currency-view/currency-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__language_view_language_view_component__ = __webpack_require__("./src/app/language-view/language-view.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var appRoutes = [
    { path: 'regions-view', component: __WEBPACK_IMPORTED_MODULE_3__regions_view_regions_view_component__["a" /* RegionsViewComponent */], pathMatch: 'full' },
    { path: '', redirectTo: 'regions-view', pathMatch: 'full' },
    { path: 'regions-view/:countryName', component: __WEBPACK_IMPORTED_MODULE_4__country_view_country_view_component__["a" /* CountryViewComponent */] },
    { path: 'single-view/:singleName', component: __WEBPACK_IMPORTED_MODULE_5__single_country_view_single_country_view_component__["a" /* SingleCountryViewComponent */] },
    { path: 'currency-view/:currencyCode', component: __WEBPACK_IMPORTED_MODULE_9__currency_view_currency_view_component__["a" /* CurrencyViewComponent */] },
    { path: 'language-view/:languageCode', component: __WEBPACK_IMPORTED_MODULE_10__language_view_language_view_component__["a" /* LanguageViewComponent */] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__regions_view_regions_view_component__["a" /* RegionsViewComponent */],
                __WEBPACK_IMPORTED_MODULE_4__country_view_country_view_component__["a" /* CountryViewComponent */],
                __WEBPACK_IMPORTED_MODULE_5__single_country_view_single_country_view_component__["a" /* SingleCountryViewComponent */],
                __WEBPACK_IMPORTED_MODULE_9__currency_view_currency_view_component__["a" /* CurrencyViewComponent */],
                __WEBPACK_IMPORTED_MODULE_10__language_view_language_view_component__["a" /* LanguageViewComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__api_calls_service__["a" /* ApiCallsService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/country-view/country-view.component.css":
/***/ (function(module, exports) {

module.exports = ".margin-top-20 {\r\n    margin-top: 2rem;\r\n}"

/***/ }),

/***/ "./src/app/country-view/country-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row margin-top-20\" *ngIf=\"regionViewResponse\">\n\t\t<div class=\"col-lg-4 col-md-6  col-xs-12 margin-bottom-20\"  *ngFor=\"let region of regionViewResponse\">\n\t\t\t<div class=\"card border border-danger\"  >\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t<img class=\"img-fluid\" src={{region.flag}} alt=\"flag\" />\n\t\t\t\t\t<h5 class=\"card-title\">Name: {{region.name}}</h5>\n\t\t\t\t\t<p class=\"card-text\">Capital: {{region.capital}}</p>\n\t\t\t\t\t<p class=\"card-text\">Region: {{region.region}}</p>\n\t\t\t\t\t<p class=\"card-text\">Sub Region: {{region.subregion}}</p>\n\t\t\t\t\t<p class=\"card-text\">Timezones: {{region.timezones[0]}}</p>\n\t\t\t\t\t<p class=\"card-text\">Population: {{region.population}}</p>\n\t\t\t\t\t<p class=\"card-text\">NativeName: {{region.nativeName}}</p>\n\n\t\t\t\t\t<div *ngFor=\"let currency of region.currencies; index as i\">\n\t\t\t\t\t\t<a  *ngIf=\"currency.code\" class=\"card-text\" [routerLink]=\"['/currency-view',currency.code]\" id =\"i\">Currency: {{currency.name}}</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div  *ngFor=\"let language of region.languages; index as i\">\n\t\t\t\t\t\t<a *ngIf=\"language.iso639_1\" class=\"card-text\" [routerLink]=\"['/language-view',language.iso639_1]\" id=\"i\">Language: {{language.name}}</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<a [routerLink]=\"['/single-view',region.name]\" class=\"btn btn-danger\">More Info</a>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t</div>\n\n\t\t</div>\n\n\n\t</div>\n\n\t\t\t\t\t<a (click) =\"goBackToPreviousPage()\" class=\"btn btn-danger margin-top-20\">Go Back</a>\n\n\t\n</div>"

/***/ }),

/***/ "./src/app/country-view/country-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_calls_service__ = __webpack_require__("./src/app/api-calls.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CountryViewComponent = /** @class */ (function () {
    function CountryViewComponent(_route, apiCallsService, location) {
        var _this = this;
        this._route = _route;
        this.apiCallsService = apiCallsService;
        this.location = location;
        this.goBackToPreviousPage = function () {
            debugger;
            _this.location.back();
        };
        console.log("Country View Component called");
    }
    CountryViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        debugger;
        var regionName = this._route.snapshot.paramMap.get('countryName');
        this.apiCallsService.getSelectedRegion(regionName).subscribe(function (data) {
            console.log("Country View Response");
            debugger;
            _this.regionViewResponse = data;
        }, function (error) {
            console.log("some error happens in region view");
            console.log(error.errorMessage);
        });
    };
    CountryViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-country-view',
            template: __webpack_require__("./src/app/country-view/country-view.component.html"),
            styles: [__webpack_require__("./src/app/country-view/country-view.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__api_calls_service__["a" /* ApiCallsService */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]])
    ], CountryViewComponent);
    return CountryViewComponent;
}());



/***/ }),

/***/ "./src/app/currency-view/currency-view.component.css":
/***/ (function(module, exports) {

module.exports = ".margin-top-20 {\r\n    margin-top: 2rem;\r\n}"

/***/ }),

/***/ "./src/app/currency-view/currency-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row margin-top-20\" *ngIf=\"currencyViewresponse\">\n\t\t<div class=\"col-lg-4 col-md-6  col-xs-12 margin-bottom-20\"  *ngFor=\"let currency of currencyViewresponse\">\n\t\t\t<div class=\"card border border-danger\"  >\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t<img class=\"img-fluid\" src={{currency.flag}} alt=\"flag\" />\n\t\t\t\t\t<h5 class=\"card-title\">Name: {{currency.name}}</h5>\n\t\t\t\t\t<p class=\"card-text\">Capital: {{currency.capital}}</p>\n\t\t\t\t\t<p class=\"card-text\">Region: {{currency.region}}</p>\n\t\t\t\t\t<p class=\"card-text\">Sub Region: {{currency.subregion}}</p>\n\t\t\t\t\t<p class=\"card-text\">Timezones: {{currency.timezones[0]}}</p>\n\t\t\t\t\t<p class=\"card-text\">Population: {{currency.population}}</p>\n\t\t\t\t\t<p class=\"card-text\">NativeName: {{currency.nativeName}}</p>\n\t\t\t\t\t<div *ngFor=\"let currency1 of currency.currencies\">\n\t\t\t\t\t\t<a  *ngIf=\"currency1.code\" class=\"card-text\" [routerLink]=\"['/currency-view',currency1.code]\" >Currency: {{currency1.name}}</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div *ngFor=\"let language of currency.languages\">\n\t\t\t\t\t\t<a *ngIf=\"language.iso639_1\" class=\"card-text\" [routerLink]=\"['/language-view',language.iso639_1]\">Language: {{language.name}}</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<a [routerLink]=\"['/single-view',currency.name]\" class=\"btn btn-danger\">More Info</a>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t\t\t\t\t<a (click) =\"goBackToPreviousPage()\" class=\"btn btn-danger margin-top-20\">Go Back</a>\n\n\t\n</div>"

/***/ }),

/***/ "./src/app/currency-view/currency-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_calls_service__ = __webpack_require__("./src/app/api-calls.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CurrencyViewComponent = /** @class */ (function () {
    function CurrencyViewComponent(_route, apiCallsService, location) {
        var _this = this;
        this._route = _route;
        this.apiCallsService = apiCallsService;
        this.location = location;
        this.goBackToPreviousPage = function () {
            debugger;
            _this.location.back();
        };
        console.log("Currency View Component called");
    }
    CurrencyViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            var currencyCode = params['currencyCode'];
            _this.apiCallsService.getSelectedCurrency(currencyCode).subscribe(function (data) {
                console.log("Country View Response");
                debugger;
                _this.currencyViewresponse = data;
            }, function (error) {
                console.log("some error happens in region view");
                console.log(error.errorMessage);
            });
        });
    };
    CurrencyViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-currency-view',
            template: __webpack_require__("./src/app/currency-view/currency-view.component.html"),
            styles: [__webpack_require__("./src/app/currency-view/currency-view.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__api_calls_service__["a" /* ApiCallsService */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]])
    ], CurrencyViewComponent);
    return CurrencyViewComponent;
}());



/***/ }),

/***/ "./src/app/language-view/language-view.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/language-view/language-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row margin-top-20\" *ngIf=\"languageViewResponse\">\n\t\t<div class=\"col-lg-4 col-md-6  col-xs-12 margin-bottom-20\"  *ngFor=\"let language of languageViewResponse\">\n\t\t\t<div class=\"card border border-danger\"  >\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t<img class=\"img-fluid\" src={{language.flag}} alt=\"flag\" />\n\t\t\t\t\t<h5 class=\"card-title\">Name: {{language.name}}</h5>\n\t\t\t\t\t<p class=\"card-text\">Capital: {{language.capital}}</p>\n\t\t\t\t\t<p class=\"card-text\">Region: {{language.region}}</p>\n\t\t\t\t\t<p class=\"card-text\">Sub Region: {{language.subregion}}</p>\n\t\t\t\t\t<p class=\"card-text\">Timezones: {{language.timezones[0]}}</p>\n\t\t\t\t\t<p class=\"card-text\">Population: {{language.population}}</p>\n\t\t\t\t\t<p class=\"card-text\">NativeName: {{language.nativeName}}</p>\n\t\t\t\t\t<div *ngFor=\"let currency1 of language.currencies; index as i\">\n\t\t\t\t\t\t<a  *ngIf=\"currency1.code\" class=\"card-text\" [routerLink]=\"['/currency-view',currency1.code]\" id={{i}}>Currency: {{currency1.name}}</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div *ngFor=\"let language of language.languages; index as i\">\n\t\t\t\t\t\t<a  *ngIf=\"language.iso639_1\" class=\"card-text\" [routerLink]=\"['/language-view',language.iso639_1]\" id={{i}}>Language: {{language.name}}</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<a [routerLink]=\"['/single-view',language.name]\" class=\"btn btn-danger\">More Info</a>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t\t\t\t\t<a (click) =\"goBackToPreviousPage()\" class=\"btn btn-danger\">Go Back</a>\n\n\t\n</div>"

/***/ }),

/***/ "./src/app/language-view/language-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguageViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_calls_service__ = __webpack_require__("./src/app/api-calls.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LanguageViewComponent = /** @class */ (function () {
    function LanguageViewComponent(_route, apiCallsService, location) {
        var _this = this;
        this._route = _route;
        this.apiCallsService = apiCallsService;
        this.location = location;
        this.goBackToPreviousPage = function () {
            debugger;
            _this.location.back();
        };
        console.log("Language View Component called");
    }
    LanguageViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            var languageCode = params['languageCode'];
            _this.languageViewResponse = null;
            _this.apiCallsService.getSelectedLanguage(languageCode).subscribe(function (data) {
                console.log("Language View Response");
                debugger;
                _this.languageViewResponse = data;
            }, function (error) {
                console.log("some error happens in region view");
                console.log(error.errorMessage);
            });
        });
    };
    LanguageViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-language-view',
            template: __webpack_require__("./src/app/language-view/language-view.component.html"),
            styles: [__webpack_require__("./src/app/language-view/language-view.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__api_calls_service__["a" /* ApiCallsService */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]])
    ], LanguageViewComponent);
    return LanguageViewComponent;
}());



/***/ }),

/***/ "./src/app/regions-view/regions-view.component.css":
/***/ (function(module, exports) {

module.exports = ":root {\r\n    font-size: 10px;\r\n}\r\n\r\n.margin-top-20 {\r\n    margin-top: 2rem;\r\n}"

/***/ }),

/***/ "./src/app/regions-view/regions-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">     \n    <div class=\"row margin-top-20\">\n        <!--<a [routerLink]=\"country-view\">-->\n         <div class=\"col-lg-4  col-md-6 col-sm-12 text-center\">\n            <img [routerLink]=\"['/regions-view','americas']\" src=\"assets/images/america1.gif\" alt=\"america\" />\n        </div>\n        <!--</a>-->\n        <div class=\"col-lg-4 col-md-6 col-sm-12 text-center\">\n            <img [routerLink]=\"['/regions-view','africa']\" src=\"assets/images/africa.png\" alt=\"africa\" />\n        </div>\n       \n        <div class=\"col-lg-4  col-md-6 col-sm-12 text-center\">\n            <img [routerLink]=\"['/regions-view','europe']\" src=\"assets/images/europe.png\" alt=\"Europe\" />\n\n        </div>\n    </div>\n\n       <div class=\"row margin-top-20\">\n        <div class=\"col-lg-4  col-md-6 col-sm-12 text-center\">\n            <img [routerLink]=\"['/regions-view','asia']\" src=\"assets/images/asia.png\" alt=\"asia\" />\n        </div>\n        <div class=\"col-lg-4  col-md-6 col-sm-12 text-center\">\n            <img [routerLink]=\"['/regions-view','oceania']\" src=\"assets/images/OceaniaMap.gif\" alt=\"Oceania\" />\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/regions-view/regions-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegionsViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegionsViewComponent = /** @class */ (function () {
    function RegionsViewComponent() {
    }
    RegionsViewComponent.prototype.ngOnInit = function () {
    };
    RegionsViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-regions-view',
            template: __webpack_require__("./src/app/regions-view/regions-view.component.html"),
            styles: [__webpack_require__("./src/app/regions-view/regions-view.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegionsViewComponent);
    return RegionsViewComponent;
}());



/***/ }),

/***/ "./src/app/single-country-view/single-country-view.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/single-country-view/single-country-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <nav>\n  <div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\n    <a class=\"nav-item nav-link active\" id=\"nav-home-tab\" data-toggle=\"tab\" href=\"#nav-home\" role=\"tab\" aria-controls=\"nav-home\" aria-selected=\"true\">About</a>\n    <a class=\"nav-item nav-link\" id=\"nav-profile-tab\" data-toggle=\"tab\" href=\"#nav-profile\" role=\"tab\" aria-controls=\"nav-profile\" aria-selected=\"false\">Geographical Details</a>\n    <a class=\"nav-item nav-link\" id=\"nav-contact-tab\" data-toggle=\"tab\" href=\"#nav-contact\" role=\"tab\" aria-controls=\"nav-contact\" aria-selected=\"false\">Language Details</a>\n  </div>\n</nav>\n<div class=\"tab-content\" id=\"nav-tabContent\">\n  <div class=\"tab-pane fade show active\" id=\"nav-home\" role=\"tabpanel\" aria-labelledby=\"nav-home-tab\">\n      \t<div class=\"row margin-top-20\" *ngIf=\"singleViewResponse\">\n    \n\t\t<div class=\"col-lg-4 col-md-6  col-xs-12 margin-bottom-20\"  *ngFor=\"let region of singleViewResponse\">\n\t\t\t<div class=\"card border border-danger\"  >\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t<img class=\"img-fluid\" src={{region.flag}} alt=\"flag\" />\n\t\t\t\t\t<h5 class=\"card-title\">Name: {{region.name}}</h5>\n\t\t\t\t\t<p class=\"card-text\">Capital: {{region.capital}}</p>\n\t\t\t\t\t<p class=\"card-text\">Region: {{region.region}}</p>\n\t\t\t\t\t<p class=\"card-text\">Sub Region: {{region.subregion}}</p>\n          <p class=\"card-text\">NativeName: {{region.nativeName}}</p>\n\t\t\t\t\t<a (click) =\"goBackToPreviousPage()\" class=\"btn btn-danger\">Go Back</a>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t</div>\n\t\t</div>\n\t</div>\n  </div>\n  <div class=\"tab-pane fade\" id=\"nav-profile\" role=\"tabpanel\" aria-labelledby=\"nav-profile-tab\">\n    \t<div class=\"row margin-top-20\" *ngIf=\"singleViewResponse\">\n    \n\t\t<div class=\"col-lg-4 col-md-6  col-xs-12 margin-bottom-20\"  *ngFor=\"let region of singleViewResponse\">\n\t\t\t<div class=\"card border border-success\"  >\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t<img class=\"img-fluid\" src={{region.flag}} alt=\"flag\" />\n          <h5 class=\"card-title\">Name: {{region.name}}</h5>\n\t\t\t\t\t<p class=\"card-text\">Population: {{region.population}}</p>\n          <p class=\"card-text\">Timezones: {{region.timezones[0]}}</p>\n\t\t\t\t\t<div *ngFor=\"let currency of region.currencies\">\n\t\t\t\t\t\t<a *ngIf=\"currency.code\" class=\"card-text\" [routerLink]=\"['/currency-view',currency.code]\" >Currency: {{currency.name}}</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p class=\"card-text\">Demonym: {{region.demonym}}</p>\n\n          \n\t\t\t\t\t<a (click) =\"goBackToPreviousPage()\" class=\"btn btn-danger\">Go Back</a>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t</div>\n\t\t</div>\n\t</div>\n  </div>\n  <div class=\"tab-pane fade\" id=\"nav-contact\" role=\"tabpanel\" aria-labelledby=\"nav-contact-tab\">\n    \t<div class=\"row margin-top-20\" *ngIf=\"singleViewResponse\">\n    \n\t\t<div class=\"col-lg-4 col-md-6  col-xs-12 margin-bottom-20\"  *ngFor=\"let region of singleViewResponse\">\n\t\t\t<div class=\"card border border-success\"  >\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t<img class=\"img-fluid\" src={{region.flag}} alt=\"flag\" />\n\t\t\t\t\t<h5 class=\"card-title\">Name: {{region.name}}</h5>\n\t\t\t\t\t<div *ngFor=\"let language of region.languages\">\n\t\t\t\t\t\t<a  *ngIf=\"language.iso639_1\" class=\"card-text\" [routerLink]=\"['/language-view',language.iso639_1]\">Language: {{language.name}}</a>\n\t\t\t\t\t</div>\n          <div *ngFor=\"let region1 of region.altSpellings\">\n            <p>Alt Spellings: {{region1}}</p>\n          </div>\n\t\t\t\t\t<a (click) =\"goBackToPreviousPage()\" class=\"btn btn-danger\">Go Back</a>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t</div>\n\t\t</div>\n\t</div>\n  </div>\n</div>\n\n\n\n\t\n</div>"

/***/ }),

/***/ "./src/app/single-country-view/single-country-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleCountryViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_calls_service__ = __webpack_require__("./src/app/api-calls.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SingleCountryViewComponent = /** @class */ (function () {
    function SingleCountryViewComponent(_route, apiCallsService, location) {
        var _this = this;
        this._route = _route;
        this.apiCallsService = apiCallsService;
        this.location = location;
        this.goBackToPreviousPage = function () {
            debugger;
            _this.location.back();
        };
        console.log("Single Country View Component called");
    }
    SingleCountryViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        var singleName = this._route.snapshot.paramMap.get('singleName');
        this.apiCallsService.getSingleCountryName(singleName).subscribe(function (data) {
            console.log("Country View Response");
            debugger;
            _this.singleViewResponse = data;
        }, function (error) {
            console.log("some error happens in  single country view");
            console.log(error.errorMessage);
        });
    };
    SingleCountryViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-single-country-view',
            template: __webpack_require__("./src/app/single-country-view/single-country-view.component.html"),
            styles: [__webpack_require__("./src/app/single-country-view/single-country-view.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__api_calls_service__["a" /* ApiCallsService */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]])
    ], SingleCountryViewComponent);
    return SingleCountryViewComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map