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
  getToken() {
    let user = JSON.parse(localStorage.getItem("User"));
    return user.token
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Auth_token': this.getToken()
    })
  }
  getUserById(id) {
    return this.http.get<Users>(this.path + "/users/" + id, this.httpOptions);
  }
  getUsers() {
    return this.http.get<Users[]>(this.path + "/users/all", this.httpOptions);
  }

  deleteUser(id) {
    return this.http.delete(this.path + "/users/" + id, this.httpOptions);
  }
  getProductByIdWarehouse(id) {
    return this.http.get<Products>(this.path + "/products/prod/" + id);
  }
  createProduct(product) {
    return this.http.post<Products>(this.path + '/products', product);
  }
  updateProduct(id, product) {
    return this.http.put(this.path + '/products/' + id, product);
  }
  updateUser(id, user) {
    return this.http.put(this.path + '/users/' + id, user, this.httpOptions);
  }
  deleteBuy(id) {
    return this.http.delete(this.path + '/buys/' + id);
  }
  getWarehouses() {
    return this.http.get<Warehouses[]>(this.path + '/wareHouses');
  }
  getWarehouseById(id) {
    return this.http.get<Warehouses[]>(this.path + '/wareHouses/' + id);
  }
  createWarehouse(warehouse) {
    return this.http.post(this.path + '/warehouses', warehouse, this.httpOptions);
  }
  updateWarehouse(id, warehouse) {
    return this.http.put(this.path + '/warehouses/' + id, warehouse, this.httpOptions);
  }
  deleteWarehouse(id) {
    return this.http.delete(this.path + "/warehouses/" + id, this.httpOptions);
  }
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
