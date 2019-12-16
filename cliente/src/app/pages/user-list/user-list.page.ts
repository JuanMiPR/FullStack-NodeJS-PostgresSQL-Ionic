import { Component, OnInit } from '@angular/core';
import { Users } from '../../models/user.model';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss', '../../app.component.scss'],
})
export class UserListPage implements OnInit {
  filterText: string = '';
  Users: Users[];
  constructor(private api: ApiService, private router: Router, private alertController: AlertController,
              private toastController: ToastController) {

  }
  ionViewDidEnter() {
    this.loadUsers();
  }
  userDetail(id: number) {
    this.router.navigate(['/user-details', id]);
  }
  search(event) {
    this.filterText = event.detail.value;
  }
  ngOnInit() {
  }
  loadUsers() {
    this.api.getUsers().subscribe(data => {
      this.Users = data['data'];
    }, error => {

    });
  }
  updateUser(user: Users) {
    this.router.navigate(['/update-user/' + user.id_user]);
  }
  deleteUser(user: Users) {

    this.presentAlert('¿Seguro que desea eliminar el Usuario?', user.id_user);
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

            this.api.deleteUser(id).subscribe((data) => {
              this.loadUsers();
              this.presentToast('Usuario eliminado');
            }, error => {

              this.presentToast('Fallo al eliminar');
            });

          }
        }
      ]
    });

    await alert.present();
  }

}
