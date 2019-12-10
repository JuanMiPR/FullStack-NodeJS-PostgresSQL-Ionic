import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.page.html',
  styleUrls: ['./item-details.page.scss', '../../app.component.scss'],
})
export class ItemDetailsPage implements OnInit {
  product_name: string;
  product_stock: number;
  product_image: any;
  constructor(private router: ActivatedRoute, private api: ApiService) {

    this.getProductInfo();
  }
  getProductInfo() {
    let idProduct = this.router.snapshot.paramMap.get("id");
    this.api.getProductbyId(idProduct).subscribe(data => {

      this.product_image = data['data']['product_image'];
      this.product_name = data['data']['product_name'];
      this.product_stock = data['data']['product_stock'];

    }, error => {
      console.log(error);
    });
  }

  ngOnInit() {

  }

}
