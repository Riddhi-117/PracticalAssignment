import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { DisplayComponent } from './display/display.component';
import { GetProductComponent } from './get-product/get-product.component';
import { AddProductComponent } from './add-product/add-product.component';
const routes: Routes = [
  
  // {path : '',pathMatch : 'full',redirectTo:'login'},
  // {path : 'login' , component : LoginComponent},
  {path :'' ,pathMatch :'full', redirectTo :'display'},
  {path :'display',component:DisplayComponent},
  { path : 'getProducts', component : GetProductComponent },
  {path : 'addProduct', component : AddProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
