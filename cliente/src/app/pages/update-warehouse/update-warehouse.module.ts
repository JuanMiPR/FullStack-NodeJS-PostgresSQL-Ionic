import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateWarehousePageRoutingModule } from './update-warehouse-routing.module';

import { UpdateWarehousePage } from './update-warehouse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    UpdateWarehousePageRoutingModule
  ],
  declarations: [UpdateWarehousePage]
})
export class UpdateWarehousePageModule { }
