import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Products } from '../models/products.model';
import { User } from 'firebase';
import { Buys } from '../models/buy.model';
import { Warehouses } from '../models/warehouse.model';
import { Users } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  first = false;
  path = 'http://localhost:40000';
  constructor(private http: HttpClient) {

  }
  httpOptions;
  getToken() {
    let user = JSON.parse(localStorage.getItem("User"));
    if (user != null) {
      return user.token
    } else {
      return ""
    }

  }
  getOptions() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'auth_token': this.getToken()
      })
    }
  }


  logOut(id) {
    this.getOptions();
    return this.http.get(this.path + '/users/singout/' + id, this.httpOptions);
  }

  getUserById(id) {
    this.getOptions();
    return this.http.get<Users>(this.path + "/users/" + id, this.httpOptions);
  }

  getUsers() {
    this.getOptions();
    return this.http.get<Users[]>(this.path + "/users/all", this.httpOptions);
  }

  deleteUser(id) {
    this.getOptions();
    return this.http.delete(this.path + "/users/" + id, this.httpOptions);
  }
  getProductByIdWarehouse(id) {
    this.getOptions();
    return this.http.get<Products>(this.path + "/products/prod/" + id, this.httpOptions);
  }
  createProduct(product) {
    this.getOptions();
    return this.http.post<Products>(this.path + '/products', product, this.httpOptions);
  }
  updateProduct(id, product) {
    this.getOptions();
    return this.http.put(this.path + '/products/' + id, product, this.httpOptions);
  }
  updateUser(id, user) {
    this.getOptions();
    return this.http.put(this.path + '/users/' + id, user, this.httpOptions);
  }
  deleteBuy(id) {
    this.getOptions();
    return this.http.delete(this.path + '/buys/' + id, this.httpOptions);
  }
  getWarehouses() {
    this.getOptions();
    return this.http.get<Warehouses[]>(this.path + '/wareHouses', this.httpOptions);
  }
  getWarehouseById(id) {
    this.getOptions();
    return this.http.get<Warehouses[]>(this.path + '/wareHouses/' + id, this.httpOptions);
  }
  createWarehouse(warehouse) {
    this.getOptions();
    return this.http.post(this.path + '/warehouses', warehouse, this.httpOptions);
  }
  updateWarehouse(id, warehouse) {
    this.getOptions();
    return this.http.put(this.path + '/warehouses/' + id, warehouse, this.httpOptions);
  }
  deleteWarehouse(id) {
    this.getOptions();
    return this.http.delete(this.path + "/warehouses/" + id, this.httpOptions);
  }
  getProducts() {
    this.getOptions();

    return this.http.get<Products[]>(this.path + '/products', this.httpOptions);

  }
  getBuyByIdBuy(id_buy) {
    this.getOptions();
    return this.http.get<Buys>(this.path + "/buys/buy/" + id_buy, this.httpOptions);
  }
  getBuyByIdUser(id_user) {
    this.getOptions();
    return this.http.get<Buys[]>(this.path + "/buys/" + id_user, this.httpOptions);
  }
  postBuy(buy) {
    this.getOptions();
    return this.http.post<Buys>(this.path + "/buys", buy, this.httpOptions);

  }
  deleteProduct(id) {
    this.getOptions();
    return this.http.delete<Products>(this.path + "/products/" + id, this.httpOptions);
  }

  createUser(user) {
    this.getOptions();
    return this.http.post<User>(this.path + "/users/singup", user, this.httpOptions);
  }

  login(userInfo) {
    this.getOptions();
    return this.http.post<User[]>(this.path + "/login/normal", userInfo, this.httpOptions);

  }
  getProductbyId(id) {
    this.getOptions();

    return this.http.get<Products[]>(this.path + "/products/" + id, this.httpOptions);
  }


}
