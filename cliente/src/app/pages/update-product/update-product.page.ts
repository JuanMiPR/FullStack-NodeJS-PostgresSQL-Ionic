import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, from } from 'rxjs';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AngularFireStorage, AngularFireStorageReference } from 'angularfire2/storage';
import { finalize } from 'rxjs/operators';
import { ApiService } from '../../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Warehouses } from '../../models/warehouse.model';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.page.html',
  styleUrls: ['./update-product.page.scss', '../../app.component.scss'],
})
export class UpdateProductPage implements OnInit {
  oldProduct_name: string;
  oldProduct_stock: number;
  oldProduct_image: string;
  oldIdWarehouse: number;
  Form: FormGroup;
  warehouses: Warehouses[] = [];
  filePath: string;
  idProduct: number;
  constructor(private imageUpload: AngularFireStorage, private router: ActivatedRoute, private navigate:Router,private api: ApiService) {
    this.getProductInfo();
    this.Form = this.createFormGroup();
    this.getWarehouses();
  }

  ngOnInit() {
  }

  getProductInfo() {
    let idProduct = this.router.snapshot.paramMap.get("id");
    this.api.getProductbyId(idProduct).subscribe(data => {

      this.oldProduct_image = data['data']['product_image'];
      this.oldProduct_name = data['data']['product_name'];
      this.oldProduct_stock = data['data']['product_stock'];
      this.oldIdWarehouse = data['data']['id_warehouse'];
      this.idProduct = data['data']['id_product'];

    }, error => {
      console.log(error);
    });
  }
  createFormGroup() {
    return new FormGroup({

      name: new FormControl('', [Validators.minLength(3)]),
      stock: new FormControl('', [Validators.min(1)]),

      warehouseSelected: new FormControl('')
    })
  }
  updateForm() {

    if (this.Form.valid) {
      let idWarehouse: number;
      let productName: string;
      let productStock: number;
      if (this.Form.get('warehouseSelected').value === '') {
        idWarehouse = this.oldIdWarehouse
      } else {
        idWarehouse = this.Form.get('warehouseSelected').value
      }
      if (this.Form.get('name').value === '') {
        productName = this.oldProduct_name
      } else {
        productName = this.Form.get('name').value
      }
      if (this.Form.get('stock').value === '') {
        productStock = this.oldProduct_stock
      } else {
        productStock = this.Form.get('stock').value
      }
      let productInfo = {
        "id_warehouse": idWarehouse,
        "product_name": productName,
        "product_stock": productStock,
        "product_image": this.oldProduct_image
      }

      console.log(productInfo);


      this.api.updateProduct(this.idProduct, productInfo).subscribe((data) => {
        this.navigate.navigate(["/products-list"]);
      }, error => {
        console.log(error)
      })





    } else {
      console.log("no valido")
    }

  }
  getWarehouses() {
    this.api.getWarehouses().subscribe((data) => {
      this.warehouses = data['data'];
    }, error => {

    })
  }

  get name() { return this.Form.get("name") }
  get warehouseSelected() { return this.Form.get("warehouseSelected") }
  get stock() { return this.Form.get("stock") }


  beforeUpdate() {
    document.getElementById('beforeUpdateButton').style.display = 'none';
    document.getElementById('updateProducts').style.display = 'block';

  }
}
