import { Component, OnInit } from '@angular/core';
import { MenuController, AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Task } from '../../models/task.model';
import { DatabaseService } from '../../services/database.service';
@Component({
  selector: 'app-admin-tasks',
  templateUrl: './admin-tasks.page.html',
  styleUrls: ['./admin-tasks.page.scss', '../../app.component.scss'],
})
export class AdminTasksPage implements OnInit {
  tasks: Task[] = [];
  constructor(private menu: MenuController, private router: Router, private database: DatabaseService,
              private alertController: AlertController, private toastController: ToastController) {
    this.loadTasks();
  }
  ngOnInit() {
  }
  taskDetail(task: Task) {
    this.router.navigate(['/task-details', task.id_task]);
  }
  loadTasks() {
    this.database.getTasks().then(tasks => {
      if (tasks === null) {
        this.tasks = [];
      } else {
        this.tasks = tasks;
      }
    })
  }
  toggleMenu() {
    this.menu.toggle();
  }
  goToTasks() {
    this.router.navigate(['/admin-tasks']);
  }
  goToCreateTasks() {
    this.menu.close();
    this.router.navigate(['/add-task']);
  }
  updateTask(task: Task) {
    this.router.navigate(['/update-task/' + task.id_task]);
  }
  deleteTask(task: Task) {
    this.presentAlert('¿Seguro que desea eliminar la tarea?', task.id_task);
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
            this.database.deleteTask(id).then(task => {
              this.loadTasks();
            })


          }
        }
      ]
    });

    await alert.present();
  }

}
