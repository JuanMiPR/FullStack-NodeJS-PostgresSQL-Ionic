import { NgModule } from '@angular/core';
import { FilterPipe } from './filter.pipe';

import { MonthFilterPipe } from './month-filter.pipe';




@NgModule({
  declarations: [FilterPipe, MonthFilterPipe],
  exports:[FilterPipe,MonthFilterPipe]
})
export class PipesModule { }
