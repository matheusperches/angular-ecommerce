import { Injectable, signal } from '@angular/core';
import { Product } from '../pages/products-list/models/products.model';

@Injectable({
  providedIn: 'root' // Globally avaialble
})
export class CartService {

  cart = signal<Product[]>([]);	

  addToCart(product: Product){
    this.cart.set([...this.cart(), product]);
  }

  removeFromCart(id: number){
    this.cart.set(this.cart().filter((p) => p.id !== id));
  }

  constructor() { }
}
