import { Component, OnInit } from '@angular/core';
import { Warehouses } from '../../models/warehouse.model';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-warehouses-list',
  templateUrl: './warehouses-list.page.html',
  styleUrls: ['./warehouses-list.page.scss', '../../app.component.scss'],
})
export class WarehousesListPage implements OnInit {
  filterText: string = '';
  Warehouses: Warehouses[] = [];
  constructor(private api: ApiService, private router: Router, private alertController: AlertController, private toastController: ToastController) {
    this.loadWarehouses();
  }

  ngOnInit() {
  }
  goToAdd() {
    this.router.navigate(["/add-warehouse"]);
  }
  warehouseDetail(id: number) {
    this.router.navigate(["/warehouse-details/", id]);
  }
  search(event) {
    this.filterText = event.detail.value
  }

  updateWarehouse(warehouse: Warehouses) {
    this.router.navigate(["/update-warehouse/" + warehouse.id_warehouse]);
  }
  deleteWarehouse(warehouse: Warehouses) {

    this.presentAlert("¿Seguro que desea eliminar el almacen?", warehouse.id_warehouse);
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
            this.api.deleteWarehouse(id).subscribe((data) => {
              this.loadWarehouses();
              this.presentToast("Almacen eliminado");
            }, error => {
              this.presentToast("Fallo al eliminar");
            });

          }
        }
      ]
    });

    await alert.present();
  }
  loadWarehouses() {
    this.api.getWarehouses().subscribe(data => {
      this.Warehouses = data['data'];
    }, error => {
    
    });
  }
}
