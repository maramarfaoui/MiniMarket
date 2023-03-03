import { Component, OnInit } from '@angular/core';
import {Product} from "../core/model/product";
import {ProductService} from "../services/product.service";
import {CalculService} from "../services/calcul.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
title : string ="welcome maram"
  listProduct! :Product[];
priceMax!:number;
eng!:number;
  constructor( serviceProduct : ProductService, private serviceCalicul :CalculService) {
    this.listProduct=serviceProduct.listProduct ;


  }
  number!:number;
calcul(){
  this.eng=this.serviceCalicul.getNumberOf(this.listProduct,"quantity",0);
}

  ngOnInit(): void {
  this.calcul();
  }
  buy(p:Product){
  let i =this.listProduct.indexOf(p)
   this.listProduct[i].quantity--;
   this.calcul();
  }
  like(p:Product){
  let i = this.listProduct.indexOf(p)
    this.listProduct[i].like +=1;
  }

}
