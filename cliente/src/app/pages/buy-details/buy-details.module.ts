import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuyDetailsPageRoutingModule } from './buy-details-routing.module';

import { BuyDetailsPage } from './buy-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuyDetailsPageRoutingModule
  ],
  declarations: [BuyDetailsPage]
})
export class BuyDetailsPageModule {}
