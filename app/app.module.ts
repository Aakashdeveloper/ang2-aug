import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import { AppComponent }  from './app.component';
import {BookComponent} from './book.component';
import {ProductListComponent} from './products/product-list.component';
import {ProductDetailComponent} from './products/product-detail.component';
import {ProductFilterPipe} from './products/product-filter.pipe'
import {StarComponent} from './shared/star.component';
import {ProductDetailGuard} from './products/product-gaurd.service'
import {WelcomeComponent} from './home/welcome.component';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'products', component: ProductListComponent},
      {path: 'product/:id', canActivate:[ProductDetailGuard],  component: ProductDetailComponent},
      {path: 'welcome',component:WelcomeComponent},
      {path:'',redirectTo:'welcome', pathMatch:'full'},
      {path:'**',redirectTo:'welcome',pathMatch:'full'}
    ])
  ],
  declarations: [
    AppComponent ,
    BookComponent,
    ProductListComponent,
    ProductFilterPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent
  ],
  providers:[ProductDetailGuard],
  bootstrap: [ AppComponent]
})
export class AppModule { }
