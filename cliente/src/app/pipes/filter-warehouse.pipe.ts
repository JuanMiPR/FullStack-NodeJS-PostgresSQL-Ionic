import { Pipe, PipeTransform } from '@angular/core';
import { Warehouses } from '../models/warehouse.model';

@Pipe({
  name: 'filterWarehouse'
})
export class FilterWarehousePipe implements PipeTransform {

  transform(Warehouses: Warehouses[], filterText: string): Warehouses[] {
    if (filterText.length === 0) {
      return Warehouses;
    }

    filterText.toLowerCase();
    return Warehouses.filter((Warehouse) => {
      return Warehouse.warehouse_address.toLowerCase().includes(filterText);
    });
  }

}
