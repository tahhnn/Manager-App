import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../interface/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  API_URL = 'http://localhost:8080/movies/';
  constructor(private http: HttpClient) { }
  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.API_URL+`list`)
  }
  removeProduct(id: string) {
    return this.http.delete(this.API_URL + `delete/${id}`)
  }
  getOneProduct(id:string | number){
    return this.http.get<IProduct>(this.API_URL + `list/detail/${id}`)
  }
}
