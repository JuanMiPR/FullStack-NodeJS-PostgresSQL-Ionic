import { Pipe, PipeTransform } from '@angular/core';
import { Buys } from '../models/buy.model';

@Pipe({
  name: 'monthFilter'
})
export class MonthFilterPipe implements PipeTransform {

  transform(buys: Buys[], filterText: string): Buys[] {

    
    return buys.filter((buy) => {
      return  buy.date.substring(5,7).includes(filterText);;
    })
  
}

}
