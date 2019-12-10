import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Users } from '../models/user.model';

@Component({
  selector: 'app-profilePage',
  templateUrl: 'profilePage.html',
  styleUrls: ['profilePage.scss', '../app.component.scss']
})
export class profilePage {
  user: Users;
  imageProfile: string;
  constructor(private api: ApiService) {

    this.getUserInfo();
  }

  getUserInfo() {
    let user = JSON.parse(localStorage.getItem('User'));
    this.api.getUserById(user['user_id']).subscribe((data) => {
      this.imageProfile = data['data']['image_profile'];
      console.log(this.imageProfile);
      this.user = data['data'];

    })
  }
}
