import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-update-warehouse',
  templateUrl: './update-warehouse.page.html',
  styleUrls: ['./update-warehouse.page.scss', '../../app.component.scss'],
})
export class UpdateWarehousePage implements OnInit {
  Form: FormGroup;
  oldWarehouseAddres: string;
  oldPhoneNumber: string;
  idWarehouse;
  constructor(private router: ActivatedRoute, private navigate: Router, private api: ApiService) {
    this.Form = this.createFormGroup();
    this.getWarehouseInfo();
  }

  ngOnInit() {
  }
  createFormGroup() {
    return new FormGroup({
      address: new FormControl('', [Validators.minLength(5)]),
      phoneNumber: new FormControl('', [Validators.min(10000)]),
    })
  }
  getWarehouseInfo() {
    this.idWarehouse = this.router.snapshot.paramMap.get('id');
    this.api.getWarehouseById(this.idWarehouse).subscribe(data => {

      this.oldWarehouseAddres = data['data']['warehouse_address'];
      this.oldPhoneNumber = data['data']['phone_number'];


    }, error => {

    });
  }
  updateForm() {

    if (this.Form.valid) {
      let warehouse_address: string;
      let phone_number: string;

      if (this.Form.get('address').value === '') {
        warehouse_address = this.oldWarehouseAddres;
      } else {
        warehouse_address = this.Form.get('address').value;
      }
      if (this.Form.get('phoneNumber').value === '') {
        phone_number = this.oldPhoneNumber;
      } else {
        phone_number = this.Form.get('phoneNumber').value;
      }

      const warehouseInfo = {
        'warehouse_address': warehouse_address,
        'phone_number': phone_number
      }
      this.api.updateWarehouse(this.idWarehouse, warehouseInfo).subscribe((data) => {
        this.navigate.navigate(['/home/adminPage']);
      });

    } else {

    }

  }
  beforeUpdate() {
    document.getElementById('beforeUpdateButton').style.display = 'none';
    document.getElementById('updateWarehouses').style.display = 'block';

  }
  get address() {
    return this.Form.get('address');
  }
  get phoneNumber() {
    return this.Form.get('phoneNumber');
  }
}
