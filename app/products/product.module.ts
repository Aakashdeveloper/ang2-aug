import  {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module'


import {ProductListComponent} from './product-list.component';
import {ProductDetailComponent} from './product-detail.component';
import {ProductFilterPipe} from './product-filter.pipe';
import {ProductService} from './product.service'
import {ProductDetailGuard} from './product-gaurd.service'

@NgModule({
    declarations:[
        ProductListComponent,
        ProductFilterPipe,
        ProductDetailComponent
    ],
    imports:[
        RouterModule,
        SharedModule,
        RouterModule.forChild([
            {path: 'products', component: ProductListComponent},
            {path: 'products/:id', canActivate:[ProductDetailGuard],  component: ProductDetailComponent},
        ])

    ],
    providers:[
        ProductService,
        ProductDetailGuard
    ]

})

export class ProductModule{}