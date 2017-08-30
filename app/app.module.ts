import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';


import { AppComponent }  from './app.component';
import {BookComponent} from './book.component';
import {ProductModule} from './products/product.module'
import {WelcomeComponent} from './home/welcome.component';




@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ProductModule,
    RouterModule.forRoot([
      {path: 'welcome',component:WelcomeComponent},
       {path: 'book',component:BookComponent},
      {path:'',redirectTo:'welcome', pathMatch:'full'},
      {path:'**',redirectTo:'welcome',pathMatch:'full'}
    ])
  ],
  declarations: [
    AppComponent ,
    BookComponent,
    WelcomeComponent
  ],
  bootstrap: [ AppComponent]
})
export class AppModule { }
