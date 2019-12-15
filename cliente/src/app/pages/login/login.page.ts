import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss', '../../app.component.scss'],
})
export class LoginPage implements OnInit {

  registerForm: FormGroup;
  emailTextValue: string;
  passwordTextValue: string;

  constructor(
    private api: ApiService,
    private router: Router,
  ) {
    this.seeConected();

    this.registerForm = this.createFormGroup();

  }

  createFormGroup() {
    return new FormGroup({
      email: new FormControl('', [Validators.required, Validators.minLength(9), Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    })
  }
  seeConected() {
    let user = JSON.parse(localStorage.getItem("User"));
    if (user != null) {
      this.router.navigate(["/home/productListPage"]);
    }
  }
  ngOnInit() {



  }

  logForm() {
    if (this.registerForm.valid) {
      let userInfo = {
        "user_email": this.emailTextValue,
        "password": this.passwordTextValue
      }

      this.api.login(userInfo).subscribe(data => {
        let user = {
          token: data['auth_token'],
          user_rol: data['user_rol'],
          image_profile: data['image_profile'],
          user_id: data['id_user']
        }


        localStorage.setItem("User", JSON.stringify(user));
        this.router.navigate(["/home/productListPage"]);

      }, error => {
        
      });
    } else {

    }

  }
  get email() { return this.registerForm.get("email") }
  get password() { return this.registerForm.get("password") }
}
