"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var product_list_component_1 = require("./product-list.component");
var product_detail_component_1 = require("./product-detail.component");
var product_filter_pipe_1 = require("./product-filter.pipe");
var product_service_1 = require("./product.service");
var star_component_1 = require("../shared/star.component");
var product_gaurd_service_1 = require("./product-gaurd.service");
var ProductModule = (function () {
    function ProductModule() {
    }
    return ProductModule;
}());
ProductModule = __decorate([
    core_1.NgModule({
        declarations: [
            product_list_component_1.ProductListComponent,
            product_filter_pipe_1.ProductFilterPipe,
            product_detail_component_1.ProductDetailComponent,
            star_component_1.StarComponent
        ],
        imports: [
            forms_1.FormsModule,
            router_1.RouterModule,
            common_1.CommonModule,
            router_1.RouterModule.forChild([
                { path: 'products', component: product_list_component_1.ProductListComponent },
                { path: 'products/:id', canActivate: [product_gaurd_service_1.ProductDetailGuard], component: product_detail_component_1.ProductDetailComponent },
            ])
        ],
        providers: [
            product_service_1.ProductService,
            product_gaurd_service_1.ProductDetailGuard
        ]
    })
], ProductModule);
exports.ProductModule = ProductModule;
//# sourceMappingURL=product.module.js.map