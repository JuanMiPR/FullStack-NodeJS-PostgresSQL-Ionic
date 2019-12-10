import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WarehousesListPageRoutingModule } from './warehouses-list-routing.module';

import { WarehousesListPage } from './warehouses-list.page';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    WarehousesListPageRoutingModule
  ],
  declarations: [WarehousesListPage]
})
export class WarehousesListPageModule { }
