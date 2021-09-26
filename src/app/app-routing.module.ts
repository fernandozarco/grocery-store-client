import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartIndexComponent } from './modules/cart/cart-index/cart-index.component';
import { CategoriesIndexComponent } from './modules/categories/categories-index/categories-index.component';
import { ItemsIndexComponent } from './modules/items/items-index/items-index.component';
import { TodaySalesReportComponent } from './modules/reports/today-sales-report/today-sales-report.component';


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
  },
  {
    path: 'reports/sales/today',
    component: TodaySalesReportComponent
  },
  {
    path: '', redirectTo: '/categories', pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
