import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddWarehousePageRoutingModule } from './add-warehouse-routing.module';

import { AddWarehousePage } from './add-warehouse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddWarehousePageRoutingModule
  ],
  declarations: [AddWarehousePage]
})
export class AddWarehousePageModule { }
