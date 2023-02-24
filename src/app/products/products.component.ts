import { Component, OnInit } from '@angular/core';
import {Product} from "../core/model/product";
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
title : string ="welcome maram"
  listProduct! :Product[];
priceMax!:number;
  constructor( serviceProduct : ProductService) {
    this.listProduct=serviceProduct.listProduct ;


  }

  ngOnInit(): void {

  }
  buy(i:number){
   this.listProduct[i].quantity--;
  }
  like(j:number){
    this.listProduct[j].like++
  }

}
