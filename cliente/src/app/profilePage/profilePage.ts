import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Users } from '../models/user.model';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { ThemeService } from '../services/theme.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profilePage',
  templateUrl: 'profilePage.html',
  styleUrls: ['profilePage.scss', '../app.component.scss']
})
export class profilePage {
  selected: string;
  user_name;
  id_user;
  user_email;
  imageProfile: string;
  constructor(private api: ApiService, private router: Router, private theme: ThemeService) {

    this.getUserInfo();
    this.selected = "Normal";

  }
  selectChanged(event) {
    let value = event.detail['value'];

    this.selected = value;

    if (this.selected == 'Normal') {
      this.theme.enableNormalFont();
    } else {
      this.theme.enableBigFont();
    }

  }
  logOut() {

    this.api.logOut(this.id_user).subscribe(() => {
      this.router.navigate(['/login']);
      localStorage.removeItem('User');
      localStorage.removeItem('cartProducts');
    });
  }
  getUserInfo() {
    let user = JSON.parse(localStorage.getItem('User'));
    this.api.getUserById(user['user_id']).subscribe((data) => {
     
      this.id_user = data['data']['id_user'];
      this.imageProfile = data['data']['image_profile'];
      this.user_name = data['data']['user_name'];
      this.user_email = data['data']['user_email'];

    })
  }


}
