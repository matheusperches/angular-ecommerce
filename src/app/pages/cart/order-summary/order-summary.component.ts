import { Component, computed, inject } from '@angular/core';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-order-summary',
  imports: [],
  template: `
    <div class="bg-slate-100 p-6 rounded-xl shadow-xl border">
      <h2 class="text-2x1"> Order summary </h2>
      <div class="flex flex-col gap-4">
        <div class="flex gap-4">
          <span class="text-lg"> Total </span> 
          <span class= "text-lg font-bold">{{'$' + total()}}</span>
        </div>
      </div>
      </div>
  `,
  styles: ``
})
export class OrderSummaryComponent {
    cartService = inject(CartService);
    total = computed(() => {
      let total = 0;
      for(const item of this.cartService.cart()){
        total += item.price;
      }
      return total;
    })
}
