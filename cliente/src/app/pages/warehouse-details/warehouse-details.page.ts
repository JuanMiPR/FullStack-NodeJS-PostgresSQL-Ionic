import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Products } from '../../models/products.model';

@Component({
  selector: 'app-warehouse-details',
  templateUrl: './warehouse-details.page.html',
  styleUrls: ['./warehouse-details.page.scss'],
})
export class WarehouseDetailsPage implements OnInit {

  constructor(private router: ActivatedRoute, private api: ApiService) {
    this.getWarehouseInfo();
  }
  phone_number;
  address;
  products: Products[] =[];
  ngOnInit() {
  }
  getWarehouseInfo() {
    let idWarehouse = this.router.snapshot.paramMap.get("id");
    this.api.getWarehouseById(idWarehouse).subscribe(data => {

      this.address = data['data']['warehouse_address'];
      this.phone_number = data['data']['phone_number'];

    }, error => {
      
    });

    this.api.getProductByIdWarehouse(idWarehouse).subscribe((data) => {
      this.products = data['data'];
    });
  }
}
