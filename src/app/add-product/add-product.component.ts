import { Component, OnInit } from '@angular/core';
import {Product} from "../core/model/product";
import {ProductService} from "../services/product.service";
import {ProductsComponent} from "../products/products.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
Product!:Product ;
  var="ngModel" ;
  constructor(private serviceProduct :ProductService , private route:Router) {

  }

addP(Product:Product){
    this.serviceProduct.addProduct(Product);
    this.route.navigateByUrl("/products")
}
  ngOnInit(): void {
    this.Product=new Product();
  }

}
