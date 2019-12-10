import { NgModule } from '@angular/core';
import { FilterPipe } from './filter.pipe';

import { MonthFilterPipe } from './month-filter.pipe';
import { FilterUserPipe } from './filter-user.pipe';
import { FilterWarehousePipe } from './filter-warehouse.pipe';




@NgModule({
  declarations: [FilterPipe, MonthFilterPipe, FilterUserPipe, FilterWarehousePipe],
  exports:[FilterPipe,MonthFilterPipe,FilterUserPipe,FilterWarehousePipe]
})
export class PipesModule { }
