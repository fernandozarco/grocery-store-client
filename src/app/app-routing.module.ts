import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartIndexComponent } from './modules/cart/cart-index/cart-index.component';
import { CategoriesIndexComponent } from './modules/categories/categories-index/categories-index.component';
import { ItemsDetailComponent } from './modules/items/items-detail/items-detail.component';
import { ItemsIndexComponent } from './modules/items/items-index/items-index.component';


const routes: Routes = [
  {
    path: 'categories',
    component: CategoriesIndexComponent
  },
  {
    path: 'categories/:categoryId/items',
    component: ItemsIndexComponent
  },
  {
    path: 'cart',
    component: CartIndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
