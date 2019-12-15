import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { Products } from '../models/products.model';
import { ToastController } from '@ionic/angular';



@Component({
  selector: 'app-productListPage',
  templateUrl: 'productListPage.html',
  styleUrls: ['productListPage.scss', '../app.component.scss']
})
export class productListPage  {

  products: Products[] = [];
  cartProducts: Products[] = [];
  filterText: string = '';
  constructor(private api: ApiService, private router: Router, private toastController: ToastController) {
    this.loadProducts();
    
  }
 
  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
  loadProducts() {
    this.api.getProducts().subscribe(data => {
      this.products = data['data'];
    }, error => {
    
    });
  }
  loadCart() {
    this.cartProducts = JSON.parse(localStorage.getItem("cartProducts"));

    if (this.cartProducts == null) {
      this.cartProducts = [];
    }
  }
  itemDetail(id: number) {
    this.router.navigate(["/item-details", id]);
  }
  goToCart() {
    this.router.navigate(["/cart-page"]);
  }
  addToCart(prod: Products) {
    this.loadCart();
    let exits: boolean;
    this.cartProducts.forEach(element => {
      if (element.id_product == prod.id_product) {
        exits = true;
      }
    });
    if (exits) {
      this.presentToast('Ya tiene añadido el producto');
    } else {
      this.cartProducts.push(prod);
      localStorage.setItem("cartProducts", JSON.stringify(this.cartProducts));
    }
  }
  search(event) {
    this.filterText = event.detail.value
  }

}
