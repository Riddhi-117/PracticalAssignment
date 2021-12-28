import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductService } from './service/product.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { GetProductComponent } from './get-product/get-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { DisplayComponent } from './display/display.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginComponent,
    GetProductComponent,
    AddProductComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
