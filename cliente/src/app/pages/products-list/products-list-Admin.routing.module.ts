import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsListPageAdmin } from './products-list-Admin.page';

const routes: Routes = [
  {
    path: '',
    component: ProductsListPageAdmin
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsListPageAdminRoutingModule {}
