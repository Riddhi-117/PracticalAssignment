import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { FormControl,FormGroup,FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { HttpClient, HttpResponse,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  addProduct !: FormGroup;
  constructor(public FormBuilder : FormBuilder, public Router : Router, public ProductService : ProductService) {
    this.addProduct = this.FormBuilder.group({
      name : new FormControl(''),
      price : new FormControl('')

    });
   }

  ngOnInit(): void {
  }

  InsertProduct()
  {
      this.ProductService.addProduct(this.addProduct.value).subscribe(()=>{
        alert("Record Inserted");
      })
  }
}
