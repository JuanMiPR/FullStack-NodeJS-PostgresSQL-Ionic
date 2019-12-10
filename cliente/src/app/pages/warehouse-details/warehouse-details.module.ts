import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WarehouseDetailsPageRoutingModule } from './warehouse-details-routing.module';

import { WarehouseDetailsPage } from './warehouse-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WarehouseDetailsPageRoutingModule
  ],
  declarations: [WarehouseDetailsPage]
})
export class WarehouseDetailsPageModule {}
