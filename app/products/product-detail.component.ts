import {Component} from '@angular/core';
import {IProduct} from './Product';

@Component({
    templateUrl:'app/products/product-detail.component.html'
})

export class ProductDetailComponent{
    pageTitle: string= 'Product Details';
    product:IProduct;
}