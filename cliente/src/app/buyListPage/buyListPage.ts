import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Buys } from '../models/buy.model';

import { Router } from '@angular/router';

@Component({
  selector: 'app-buyListPage',
  templateUrl: 'buyListPage.html',
  styleUrls: ['buyListPage.scss', '../app.component.scss']
})
export class buyListPage {
  Buys: Buys[] = [];
  monthFilter: string;
  auxFilter;

  constructor(private api: ApiService, private router: Router) {
    this.monthFilter = "00";
    const user = JSON.parse(localStorage.getItem("User"));
    this.loadBuys(user.user_id);

  }
  verBuys() {
    console.log(this.auxFilter);
  }
  loadBuys(id_user: number) {

    this.api.getBuyByIdUser(id_user).subscribe((data) => {
      this.Buys = data['data'];
      this.orderBuys();
    }, error => {
    })
  }
  selectChanged(event) {
    this.monthFilter = event.detail['value'];
  }
  goToBuyDetail(buy: Buys) {
    this.router.navigate(["buy-details/" + buy.id_buy]);
  }
  orderBuys() {
    const hash = {};
    this.Buys = this.Buys.filter(function (current) {
      const exists = !hash[current.id_buy] || false;
      hash[current.id_buy] = true;
      return exists;
    });
  }
  goToCart() {
    this.router.navigate(["/cart-page"]);
  }
}
