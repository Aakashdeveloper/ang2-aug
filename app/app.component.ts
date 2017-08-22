import {Component} from '@angular/core';
import {ProductService} from './products/product.service'

@Component({
	selector:'pm-app',
	template:`<div><h1>This is Angular2</h1>
	<book-app></book-app>
	<pm-products></pm-products>
	</div>`,
	providers:[ProductService]
})

export class AppComponent{
	
}