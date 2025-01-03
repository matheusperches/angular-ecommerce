import { Component, inject, signal } from '@angular/core';
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent, RouterLink, MatSlideToggleModule, MatToolbarModule],
  template: ` 
  <!-- 
  <div class="bg-slate-100 px-4 py-3 shadow-md flex justify-between items-center"> 
    <button class="text-xl" routerLink="/">My Store </button>
    <app-primary-button [label]="'Cart ('+ cartService.cart().length + ')'"
    routerLink="/cart"
    />
  </div>
  !-->
  <mat-toolbar class="mat-elevation-z4 justify-between items-center">
  <button class="text-xl" routerLink="/">My Store </button>
    <app-primary-button [label]="'Cart ('+ cartService.cart().length + ')'"
    routerLink="/cart"
    />
  </mat-toolbar>
  
  `,
  styles: `

  `,
})
export class HeaderComponent {
  	cartService = inject(CartService)
}