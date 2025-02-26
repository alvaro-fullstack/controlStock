import { Component } from '@angular/core';
import { ProductFormComponent } from "./components/product-form/product-form.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { TotalComponent } from "./components/total/total.component";
import { Iproduct } from './interfaces/iproduct.interface';

@Component({
  selector: 'app-root',
  imports: [ProductFormComponent, ProductListComponent, TotalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  productsList: Iproduct[] = [
    { title: 'Balon baloncesto', price: 64.99, quantity: 10 },
    { title: 'Zapatillas de running', price: 140, quantity: 25 },
  ];

  getDataForm(event: Iproduct) {
    // this.productsList.push($event)
    this.productsList = [...this.productsList, event]
  }
}
