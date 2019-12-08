import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductsListPageAdminRoutingModule } from './products-list-Admin.routing.module';
import { PipesModule } from '../../pipes/pipes.module';
import { ProductsListPageAdmin } from './products-list-Admin.page';

@NgModule({
  imports: [
    PipesModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ProductsListPageAdminRoutingModule
  ],
  declarations: [ProductsListPageAdmin]
})
export class ProductsListPageModuleAdmin {}
