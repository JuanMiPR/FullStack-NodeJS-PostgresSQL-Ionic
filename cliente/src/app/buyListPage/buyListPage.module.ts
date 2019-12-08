import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { buyListPage } from './buyListPage';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    IonicModule,
    PipesModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: buyListPage }])
  ],
  declarations: [buyListPage]
})
export class buyListPageModule {}
