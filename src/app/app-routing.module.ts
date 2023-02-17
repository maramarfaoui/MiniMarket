import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ProductsComponent} from "./products/products.component";
import {ArticlesComponentComponent} from "./articles-component/articles-component.component";
import {OffresEmploiComponent} from "./offres-emploi/offres-emploi.component";
import {NotFoundError} from "rxjs";
import {NotFoundComponent} from "./not-found/not-found.component";
import {DetailProduitComponent} from "./detail-produit/detail-produit.component";


const routes:Routes =[

  {path :'' ,redirectTo:'products', pathMatch:'full'},
{path :'products' ,component :ProductsComponent},
  {path :'article' ,component :ArticlesComponentComponent},
  {path :'offres' ,component :OffresEmploiComponent},
  {path :'detail/:id' ,component :DetailProduitComponent},
  {path:'**',component:NotFoundComponent},

];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)

  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
