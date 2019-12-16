import { Component, OnInit } from '@angular/core';
import { Products } from '../../models/products.model';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Buys } from '../../models/buy.model';


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.page.html',
  styleUrls: ['./cart-page.page.scss', '../../app.component.scss'],
})
export class CartPagePage implements OnInit {
  addressTextField: string;
  cartItems: Products[];
  quantity;
  constructor(private router: Router, private api: ApiService) {
    this.loadCartItems();
  }
  getIdBuy() {
    const id_buy = Math.floor(Math.random() * 9999) + 1;
    this.getBuybyid(id_buy);
  }
  getBuybyid(id_buy) {
    this.api.getBuyByIdBuy(id_buy).subscribe((data) => {
      if (data['data'].length === 0) {
        this.buy(id_buy);
      } else {
        this.getIdBuy();
      }
    }, error => { });
  }
  buy(id_buy) {
    let today = new Date();
    let paymentType;
    const user_address = this.addressTextField;
    let date = (today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate());
    const user = JSON.parse(localStorage.getItem('User'));
    if (document.getElementById('Cash')['checked']) {
      paymentType = 'Efectivo';
    } else {
      paymentType = 'Tarjeta'
    };
    if (user_address == undefined || user_address.length < 5) {
      document.getElementById('addressError').style.display = 'block';
    } else {
      document.getElementById('addressError').style.display = 'none';
      this.cartItems.forEach(element => {
        let quantity = document.getElementById('quantity:' + element.id_product)['value'];
        if (quantity == '') {
          quantity = 1;
        }
        const buy: Buys = {
          id_buy: id_buy,
          id_user: user.user_id,
          id_product: element.id_product,
          quantity: + quantity,
          date: date,
          payment_type: paymentType,
          user_address: user_address
        };
        this.api.postBuy(buy).subscribe((data) => {

        }, error => { });
      });
      this.deleteBuy();
    }
  }
  deleteBuy() {
    localStorage.removeItem('cartProducts');
    this.cartItems = [];
    this.router.navigate(['/home/productListPage']);
  }
  ngOnInit() {
  }
  loadCartItems() {
    this.cartItems = JSON.parse(localStorage.getItem('cartProducts'));
    if (this.cartItems == null) {
      this.cartItems = [];
    }
  }

}
