"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'pm-app',
        template: "<div>\n\t\t<nav class='navbar navbar-default'>\n\t\t\t<div class='container-fluid'>\n\t\t\t<a class='navbar-brand'>{{pageTitle}}</a>\n\t\t\t<ul class='nav navbar-nav'>\n\t\t\t\t<li><a [routerLink]=\"['/welcome']\">Home</a></li>\n\t\t\t\t<li><a [routerLink]=\"['/products']\">Product</a></li>\n\t\t\t\t<li><a [routerLink]=\"['/book']\">Books</a></li>\n\t\t\t</ul>\n\t\t\t</div>\n\t\t</nav>\n\t\t<div class='container'>\n\t\t\t<router-outlet></router-outlet>\n\t\t</div>\n\t</div>"
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map