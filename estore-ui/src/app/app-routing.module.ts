/**
 * SWEN 261
 * Routes the different components of the Beans store.
 * 
 * Contributors: Isaac Post, Donald Burke
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { InventoryComponent } from './inventory/inventory.component';
import { UserStoreComponent } from './user-store/user-store.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UserProductViewComponent } from './user-product-view/user-product-view.component';

const routes: Routes =  [
  { path: 'login', component: UserLoginComponent},
  { path: 'user-store', component: UserStoreComponent},
  { path: 'admin-store', component: InventoryComponent},
  { path: 'product-details/:id', component: ProductDetailsComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent},
  { path: 'user-product-view/:id', component: UserProductViewComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
