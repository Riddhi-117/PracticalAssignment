import { Injectable } from '@angular/core';
import { User } from 'src/user';
import { Product } from '../product.model';
import { Router } from '@angular/router';
import { HttpHeaders,HttpResponse,HttpClientModule,HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseuri : String="http://localhost:8000";
  headers = new HttpHeaders().set('Content-type','appliction/json');
  constructor(private http:HttpClient) { }

  login(data : User)
  {
    return this.http.post(`${this.baseuri}/login`,data);
  }

  product()
  {
    return this.http.get(`${this.baseuri}/getProducts`)
  }

  addProduct(data : Product)
  {
    return this.http.post(`${this.baseuri}/addProduct`,data);
  }
  
}
