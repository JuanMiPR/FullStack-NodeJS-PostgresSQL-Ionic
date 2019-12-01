import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, from } from 'rxjs';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AngularFireStorage, AngularFireStorageReference } from 'angularfire2/storage';
import { finalize } from 'rxjs/operators';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  @ViewChild("imageUser", { static: true }) input: ElementRef;
  filePath: string;
  imageRef: AngularFireStorageReference;
  file: File;
  image_url: Observable<string>;
  nameTextValue: string;
  surnameTextValue: string;
  emailTextValue: string;
  passwordTextValue: string;
  registerForm: FormGroup;
  constructor(private imageUpload: AngularFireStorage, private api: ApiService, private router: Router) {
    this.registerForm = this.createFormGroup();
  }


  createFormGroup() {
    return new FormGroup({
      email: new FormControl('', [Validators.required, Validators.minLength(9), Validators.email]),
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      surname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      image: new FormControl('', [Validators.required])
    })
  }

  ngOnInit() {
  }

  logForm() {
    if (this.registerForm.valid) {
      console.log();

      let userInfo = {
        "user_name": this.nameTextValue + " " + this.surnameTextValue,
        "password": this.passwordTextValue,
        "user_rol": null,
        "user_type": null,
        "user_email": this.emailTextValue,
        "image_profile": this.input.nativeElement.defaultValue,
        "auth_token": null,
      }

      this.api.createUser(userInfo).subscribe(() => {
        console.log("funcionó la llamada");
        this.router.navigate(["/login"]);
      }), error => {
        console.log("fallo en la llamada");
        console.log(error);
      }
    } else {
      console.log("no valido")
    }

  }

  onUpload(e) {
    const imageId = this.emailTextValue;
    this.file = e.target.files[0];
    this.filePath = 'images/' + imageId;
    this.imageRef = this.imageUpload.ref(this.filePath);
    const task = this.imageUpload.upload(this.filePath, this.file);
    task.snapshotChanges().pipe(finalize(() => this.image_url = this.imageRef.getDownloadURL())).subscribe();
  }
  get name() { return this.registerForm.get("name") }
  get surname() { return this.registerForm.get("surname") }
  get email() { return this.registerForm.get("email") }
  get password() { return this.registerForm.get("password") }
  get image() { return this.registerForm.get("image") }




}
