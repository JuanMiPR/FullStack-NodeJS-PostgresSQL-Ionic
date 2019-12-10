import { Component, OnInit } from '@angular/core';
import { Users } from '../../models/user.model';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss', '../../app.component.scss'],
})
export class UserDetailsPage implements OnInit {
 
  user_name: string;
  user_image: string;
  user_email:string;
  user_rol:string;
  user_type:string;
  constructor(private router: ActivatedRoute, private api: ApiService) {
    this.getUserInfo();
  }

  ngOnInit() {
  }
  getUserInfo() {
    let idUser = this.router.snapshot.paramMap.get("id");
    this.api.getUserById(idUser).subscribe(data => {

      this.user_name = data['data']['user_name'];
      this.user_image = data['data']['image_profile'];
      this.user_email = data['data']['user_email'];
      this.user_rol = data['data']['user_rol'];
      this.user_type = data['data']['user_type'];


    }, error => {
      console.log(error);
    });
  }
}
