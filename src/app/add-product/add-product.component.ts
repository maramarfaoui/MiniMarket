import { Component, OnInit } from '@angular/core';
import {Product} from "../core/model/product";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
Product!:Product ;
  var="ngModel" ;
  constructor() { }

  ngOnInit(): void {
    this.Product=new Product();
  }

}
