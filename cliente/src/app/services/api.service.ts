import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '../models/products.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  first = false;
  path = 'http://localhost:40000';
  constructor(private http: HttpClient) { }
  getProducts() {

    return this.http.get(this.path + '/products');

  }

  createUser(user) {
    return this.http.post(this.path + "/users/singup", user);
  }

  login(userInfo) {
    return this.http.post(this.path + "/login/normal", userInfo);

  }
  getProductbyId(id) {

    return this.http.get<Products[]>(this.path + "/products/" + id);
  }


}
