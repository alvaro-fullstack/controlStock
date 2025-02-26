import { Component, input } from '@angular/core';
import { IProduct } from '../../interfaces/iproduct.interface';

@Component({
  selector: 'app-total',
  imports: [],
  templateUrl: './total.component.html',
  styleUrl: './total.component.css'
})
export class TotalComponent {
  products = input<IProduct[]>([]);
  totalprice: number = 0;
  totalQuantity: number = 0;

  ngOnChanges() {
    //this.totalQuantity = this.products.reduce((ac: number, product: IProduct) => ac + product.quantity, 0)
    //console.log(this.totalQuantity)

    for (let product of this.products()) {
      this.totalprice += product.price * product.quantity
      this.totalQuantity += product.quantity
    }
    console.log(this.totalprice)
    console.log(this.totalQuantity)

  }
}