import { Component, OnInit } from '@angular/core';
import { Products } from '../../models/products.model';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-products-list-Admin',
  templateUrl: './products-list-Admin.page.html',
  styleUrls: ['./products-list-Admin.page.scss', '../../app.component.scss'],
})
export class ProductsListPageAdmin implements OnInit {
  filterText: string = '';
  products: Products;

  constructor(private api: ApiService, private router: Router, private alertController: AlertController, private toastController: ToastController) {
    this.loadProducts();
  }
  goToAdd() {
    this.router.navigate(["/add-product"]);
  }
  loadProducts() {
    this.api.getProducts().subscribe(data => {
      this.products = data['data'];
    }, error => {
      console.log(error);
    });
  }
  itemDetail(id: number) {
    this.router.navigate(["/item-details", id]);
  }
  search(event) {
    this.filterText = event.detail.value
  }
  ngOnInit() {
  }
  updateProduct(prod: Products) {
    this.router.navigate(["/update-product/" + prod.id_product]);
  }
  deleteProduct(prod: Products) {
    console.log(prod);
    this.presentAlert("¿Seguro que desea eliminar el producto?", prod.id_product);
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
            this.api.deleteProduct(id).subscribe((data) => {
              this.loadProducts();
              this.presentToast("Producto eliminado");
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
