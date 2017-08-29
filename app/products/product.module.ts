import  {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';


import {ProductListComponent} from './product-list.component';
import {ProductDetailComponent} from './product-detail.component';
import {ProductFilterPipe} from './product-filter.pipe';
import {ProductService} from './product.service'
import {StarComponent} from '../shared/star.component';
import {ProductDetailGuard} from './product-gaurd.service'

@NgModule({
    declarations:[
        ProductListComponent,
        ProductFilterPipe,
        ProductDetailComponent,
        StarComponent
    ],
    imports:[
        FormsModule,
        RouterModule,
        CommonModule,
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