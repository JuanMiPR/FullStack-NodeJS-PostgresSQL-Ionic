import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '../models/products.model';
import { User } from 'firebase';
import { Buys } from '../models/buy.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  first = false;
  path = 'http://192.168.0.176:40000';
  constructor(private http: HttpClient) { }
  getProducts() {

    return this.http.get<Products[]>(this.path + '/products');

  }
  getBuyByIdBuy(id_buy) {
    return this.http.get<Buys>(this.path + "/buys/buy/" + id_buy);
  }
  getBuyByIdUser(id_user) {
    return this.http.get<Buys[]>(this.path + "/buys/" + id_user);
  }
  postBuy(buy) {
    return this.http.post<Buys>(this.path + "/buys", buy);

  }
  deleteProduct(id) {
    return this.http.delete<Products>(this.path + "/products/" + id);
  }

  createUser(user) {
    return this.http.post<User>(this.path + "/users/singup", user);
  }

  login(userInfo) {
    return this.http.post<User[]>(this.path + "/login/normal", userInfo);

  }
  getProductbyId(id) {

    return this.http.get<Products[]>(this.path + "/products/" + id);
  }


}
