import { Component, OnInit } from '@angular/core';
import { products } from 'src/data/products';
import { Product } from 'src/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  //properties
  title: string = 'Rahul Shetty Academy';
  products: Product[] = products;
  isUnchanged = true;

  constructor() { }

  ngOnInit(): void {
  }

  clickMe(product: Product) {
    window.alert(product.name + " course videos are available in your location to purchase")
  }

  enableBuying() {
    this.isUnchanged = !this.isUnchanged;
  }
}
