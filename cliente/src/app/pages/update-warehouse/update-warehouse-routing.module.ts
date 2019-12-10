import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateWarehousePage } from './update-warehouse.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateWarehousePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateWarehousePageRoutingModule {}
