import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { homeRoutingModule } from './home-routing.module';

import { home } from './home.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    homeRoutingModule
  ],
  declarations: [home]
})
export class homeModule {}
