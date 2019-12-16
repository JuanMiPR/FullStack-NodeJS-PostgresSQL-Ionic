import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.page.html',
  styleUrls: ['./update-user.page.scss', '../../app.component.scss'],
})
export class UpdateUserPage implements OnInit {
  oldUser_name: string;
  oldUser_rol: string;
  oldUser_image: string;
  oldUser_email: string;
  idUser: string;
  Form: FormGroup;
  constructor(private api: ApiService, private navigate: Router, private router: ActivatedRoute) {

    this.getUserInfo();
    this.Form = this.createFormGroup();
  }
  beforeUpdate() {
    document.getElementById('beforeUpdateButton').style.display = 'none';
    document.getElementById('updateUser').style.display = 'block';

  }
  getUserInfo() {
    this.idUser = this.router.snapshot.paramMap.get('id');
    this.api.getUserById(this.idUser).subscribe(data => {

      this.oldUser_name = data['data']['user_name'];
      this.oldUser_rol = data['data']['user_rol'];
      this.oldUser_image = data['data']['image_profile'];
      this.oldUser_email = data['data']['user_email'];


    }, error => {

    });
  }
  ngOnInit() {
  }
  createFormGroup() {
    return new FormGroup({
      email: new FormControl('', [Validators.minLength(9), Validators.email]),
      name: new FormControl('', [Validators.minLength(3)]),

      userRol: new FormControl('', [Validators.pattern('Admin|Normal|admin|normal')])

    });
  }
  updateForm() {

    if (this.Form.valid) {
      let name: string;

      let email: string;
      let rol: string;
      if (this.Form.get('name').value === '') {
        name = this.oldUser_name;
      } else {
        name = this.Form.get('name').value;
      }
      if (this.Form.get('email').value === '') {
        email = this.oldUser_email;
      } else {
        email = this.Form.get('email').value;
      }
      if (this.Form.get('userRol').value === '') {
        rol = this.oldUser_rol;
      } else {
        rol = this.Form.get('userRol').value;
      }
      const userInfo = {
        user_name: name,
        user_rol: rol.toLowerCase(),
        user_email: email,
      }
      this.api.updateUser(this.idUser, userInfo).subscribe((data) => {
        this.navigate.navigate(['/user-list']);
      }, error => {

      })

    } else {

    }

  }
  get name() {
    return this.Form.get('name');
  }

  get email() {
    return this.Form.get('email');
  }
  get userRol() {
    return this.Form.get('userRol');
  }

}
