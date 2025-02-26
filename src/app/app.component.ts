import { Component } from '@angular/core';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { TotalComponent } from './components/total/total.component';
import { Iproduct } from './interfaces/iproduct.interface';

@Component({
  selector: 'app-root',
  imports: [ProductFormComponent,ProductListComponent,TotalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  productList: Iproduct[] = [
    {title: 'balon baloncesto', price: 15, quantity: 10},
    {title: 'zapatillas de running', price: 85, quantity: 25},
  ];
}
