import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { Products } from '../models/products.model';



@Component({
  selector: 'app-productListPage',
  templateUrl: 'productListPage.html',
  styleUrls: ['productListPage.scss']
})
export class productListPage {
  products:Products[]=[];
  filterText:string = '';
  constructor(private api: ApiService,private router:Router) {
    this.api.getProducts().subscribe(data => {
      this.products = data['data'];
      

    }, error => {
      console.log(error);
    });
  }
  itemDetail(id:number) {
    console.log(id);
    this.router.navigate(["/item-details",id]);
  }


  search(event){
    
    this.filterText =event.detail.value
  }
}
