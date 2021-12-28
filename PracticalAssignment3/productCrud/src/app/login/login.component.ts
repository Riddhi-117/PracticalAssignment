import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import {  FormControl,FormBuilder,FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginform! : FormGroup;

  constructor(public formBuilder : FormBuilder, public Router:Router,public ProductService : ProductService) { 

    this.loginform = this.formBuilder.group({
      email : new FormControl(''),
      password : new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  onSubmit()
  {
      if(this.loginform.value['email'] == "admin")
      {
          this.Router.navigateByUrl('/getProducts');
      }
      else
      {
         this.ProductService.login(this.loginform.value).subscribe(()=>{
        alert("done");
      });
      }

    }
  }
