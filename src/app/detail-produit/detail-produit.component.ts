import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../services/product.service";
import {Product} from "../core/model/product";

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.css']
})
export class DetailProduitComponent implements OnInit {
id!:number;
product!:Product;
  constructor(private route:ActivatedRoute , private prod:ProductService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.product=this.prod.listProduct[this.id];
  }

}
