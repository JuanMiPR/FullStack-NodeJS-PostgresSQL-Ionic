import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddWarehousePageRoutingModule } from './add-warehouse-routing.module';

import { AddWarehousePage } from './add-warehouse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddWarehousePageRoutingModule
  ],
  declarations: [AddWarehousePage]
})
export class AddWarehousePageModule {}
