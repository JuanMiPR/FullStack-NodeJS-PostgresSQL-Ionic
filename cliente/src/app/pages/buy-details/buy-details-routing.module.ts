import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuyDetailsPage } from './buy-details.page';

const routes: Routes = [
  {
    path: '',
    component: BuyDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuyDetailsPageRoutingModule {}
