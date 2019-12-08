import { Component, OnInit } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoadingController, Platform, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import * as firebase from 'firebase';




@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.page.html',
  styleUrls: ['./add-user.page.scss', '../../app.component.scss'],
})
export class AddUserPage implements OnInit {


  constructor(private router: Router,
    public alertController: AlertController,
    private google: GooglePlus,
  ) { }

  ngOnInit() {

  }
  datos() {
    const user = JSON.parse(localStorage.getItem("google_user"));
    
  }
  async login() {
    this.google.login({
      'scopes': '', // optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
      'webClientId': '992457619226-mam1fc81q20uopnvevfanb2bfu8oqthc.apps.googleusercontent.com', // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
      'offline': true // Optional, but requires the webClientId - if set to true the plugin will also return a serverAuthCode, which can be used to grant offline access to a non-Google server
    })
      .then(user => {

        this.presentAlert("va bien");
        localStorage.setItem('google_user', JSON.stringify(user));

      }, err => {
        console.log(err)
        this.presentAlert(err);
      });
  }
  async presentAlert(msg) {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }
}