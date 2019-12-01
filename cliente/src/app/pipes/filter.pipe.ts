import { Pipe, PipeTransform } from '@angular/core';
import { Products } from '../models/products.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products: Products[], filterText: string): Products[] {

    if (filterText.length === 0) {
      return products;
    }
    console.log(products);
    filterText.toLowerCase();
    return products.filter((product) => {
     return product.product_name.toLowerCase().includes(filterText);
    })
  }

}
