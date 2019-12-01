import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WarehousesListPage } from './warehouses-list.page';

const routes: Routes = [
  {
    path: '',
    component: WarehousesListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WarehousesListPageRoutingModule {}
