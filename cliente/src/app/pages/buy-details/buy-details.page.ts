import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Buys } from '../../models/buy.model';
@Component({
  selector: 'app-buy-details',
  templateUrl: './buy-details.page.html',
  styleUrls: ['./buy-details.page.scss', '../../app.component.scss']
})
export class BuyDetailsPage implements OnInit {
  idBuy: string;
  buyDetails: Buys;
  constructor(private router: ActivatedRoute, private api: ApiService) {
    this.idBuy = this.router.snapshot.paramMap.get("id");
    this.getBuyDetails();
  }
  getBuyDetails() {
    this.api.getBuyByIdBuy(this.idBuy).subscribe((data) => {
      this.buyDetails = data['data'];
    }, error => {})
  }
  ngOnInit() {
  }
}
