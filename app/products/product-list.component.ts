import {Component, OnInit} from '@angular/core';
import {IProduct} from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl:'app/products/product-list.component.html',
    //styles: ['h3 {color:red;\}']
    styleUrls:['app/products/product-list.component.css']
})

export class ProductListComponent implements OnInit{
    pageTitle:string ="Product List";
    imageWidth :number =50;
    showImage: boolean = false;
    listFilter:string;
    errorMessage:string;
    products: IProduct[];

    constructor(private _productService: ProductService){

    }

    toggleImage(): void{
        this.showImage = !this.showImage;
    }
    
    ngOnInit(): void{
       this._productService.getProducts()
            .subscribe(products=>this.products=products,
            error=> this.errorMessage =<any>error);
    }

    onRatingClicked(message:string): void{
        this.pageTitle="Product List::"+ message
    }
}
