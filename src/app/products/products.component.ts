import { Component, OnInit } from '@angular/core';
import {Product} from "../core/model/product";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
title : string ="welcome maram"
  listProduct! :Product[];
priceMax!:number;
  constructor() { }

  ngOnInit(): void {
  this.listProduct =[
    {id: "1", title: "Ahmed 1", price: 18, quantity: 0, like: 0,image:"assets/ahmed.jpg"},
    {id: "2", title: "Yessin ", price: 21, quantity: 10, like: 0,image:"assets/yss.jpg"},
    {id: "3", title: "Ahmed 2", price: 16, quantity: 8, like: 0,image:"assets/ahm2.jpg"},
  ]
  }
  buy(i:number){
   this.listProduct[i].quantity--;
  }
  like(j:number){
    this.listProduct[j].like++
  }

}
