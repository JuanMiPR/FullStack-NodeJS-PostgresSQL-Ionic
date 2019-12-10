import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-add-warehouse',
  templateUrl: './add-warehouse.page.html',
  styleUrls: ['./add-warehouse.page.scss', '../../app.component.scss'],
})
export class AddWarehousePage implements OnInit {
  Form: FormGroup;
  constructor(private api: ApiService, private router: Router, private toastController: ToastController) {
    this.Form = this.createFormGroup();
  }


  ngOnInit() {
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Datos no validos',
      duration: 2000
    });
    toast.present();
  }
  createFormGroup() {
    return new FormGroup({

      address: new FormControl('', [Validators.required, Validators.minLength(5)]),
      phoneNumber: new FormControl('', [Validators.required, Validators.min(10000)]),
    })
  }
  addForm() {

    if (this.Form.valid) {

      let warehouseInfo = {

        warehouse_address: this.Form.get('address').value,
        phone_number: this.Form.get('phoneNumber').value,

      }


      this.api.createWarehouse(warehouseInfo).subscribe((data)=>{
        this.router.navigate(['/warehouses-list']);
      });

    } else {
      this.presentToast();
    }

  }
  get address() { return this.Form.get("address") }
  get phoneNumber() { return this.Form.get("phoneNumber") }

}
