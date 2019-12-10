import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, from } from 'rxjs';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AngularFireStorage, AngularFireStorageReference } from 'angularfire2/storage';
import { finalize } from 'rxjs/operators';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { Warehouses } from '../../models/warehouse.model';



@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss', '../../app.component.scss'],
})
export class AddProductPage implements OnInit {

  @ViewChild("imageProduct", { static: true }) input: ElementRef;

  warehouses: Warehouses[] = [];
  filePath: string;
  imageRef: AngularFireStorageReference;
  file: File;
  image_url: Observable<string>;

  Form: FormGroup;
  constructor(private imageUpload: AngularFireStorage, private api: ApiService, private router: Router) {
    this.Form = this.createFormGroup();
    this.getWarehouses();
  }
  createFormGroup() {
    return new FormGroup({

      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      stock: new FormControl('', [Validators.required, Validators.min(1)]),
      image: new FormControl('', [Validators.required]),
      warehouseSelected: new FormControl('', [Validators.required])
    })
  }
  getWarehouses() {
    this.api.getWarehouses().subscribe((data) => {
      this.warehouses = data['data'];
      console.log(data);
    }, error => {

    })
  }
  ngOnInit() {
  }

  addForm() {

    if (this.Form.valid) {

      let productInfo = {
        id_warehouse: this.Form.get('warehouseSelected').value,
        product_name: this.Form.get('name').value,
        product_stock: this.Form.get('stock').value,
        product_image: this.input.nativeElement.defaultValue
      }


      this.api.createProduct(productInfo).subscribe(() => {
        this.router.navigate(['/home/adminPage'])
      }
      );

    } else {
      console.log("no valido")
    }

  }

  onUpload(event) {
    const imageId = this.Form.get("name").value.toLowerCase();
    this.file = event.target.files[0];
    this.filePath = 'images/' + imageId;
    this.imageRef = this.imageUpload.ref(this.filePath);
    const task = this.imageUpload.upload(this.filePath, this.file);
    task.snapshotChanges().pipe(finalize(() => this.image_url = this.imageRef.getDownloadURL())).subscribe();
  }
  get name() { return this.Form.get("name") }
  get warehouseSelected() { return this.Form.get("warehouseSelected") }
  get stock() { return this.Form.get("stock") }
  get image() { return this.Form.get("image") }
}
