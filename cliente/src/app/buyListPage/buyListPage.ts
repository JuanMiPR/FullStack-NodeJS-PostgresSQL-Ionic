import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Buys } from '../models/buy.model';

import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-buyListPage',
  templateUrl: 'buyListPage.html',
  styleUrls: ['buyListPage.scss', '../app.component.scss']
})
export class buyListPage {
  Buys: Buys[] = [];
  monthFilter: string;
  auxFilter;
  user;
  constructor(private api: ApiService, private router: Router, private alertController: AlertController, private toastController: ToastController) {
    this.monthFilter = "00";
    this.user = JSON.parse(localStorage.getItem("User"));
    

  }
  ionViewDidEnter() {
    this.loadBuys(this.user.user_id);
  }
  deleteBuy(id) {
    this.presentAlert("¿Seguro que desea eliminar la compra?", id);
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
  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
  async presentAlert(msg, id) {
    const alert = await this.alertController.create({
      header: 'Aviso!',
      message: msg,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {

          }
        }, {
          text: 'Si',
          cssClass: 'Danger',
          handler: () => {
            this.api.deleteBuy(id).subscribe((data) => {
              this.loadBuys(this.user.user_id);
              this.presentToast("Compra eliminada");
            }, error => {
              this.presentToast("Fallo al eliminar");
            });

          }
        }
      ]
    });
    await alert.present();
  }
}
