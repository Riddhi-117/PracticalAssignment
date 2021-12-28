import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../product.model';
@Component({
  selector: 'app-get-product',
  templateUrl: './get-product.component.html',
  styleUrls: ['./get-product.component.css']
})
export class GetProductComponent implements OnInit {
  Product : any =[];
  constructor(public ProductService : ProductService) { }

  ngOnInit(): void {
    this.ProductService.product().subscribe(res=>{
      this.Product = res;
    })
  }

}
