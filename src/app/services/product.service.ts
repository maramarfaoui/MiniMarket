import { Injectable } from '@angular/core';
import {Product} from "../core/model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  listProduct :Product[]=[
    {id: "1", title: "Ahmed 1", price: 18, quantity: 0, like: 0,image:"assets/ahmed.jpg"},
    {id: "2", title: "Yessin ", price: 21, quantity: 10, like: 0,image:"assets/yss.jpg"},
    {id: "3", title: "Ahmed 2", price: 16, quantity: 8, like: 0,image:"assets/ahm2.jpg"},];

  addProduct(p :Product){
    this.listProduct.push(p);
  }
  constructor() {

}}
