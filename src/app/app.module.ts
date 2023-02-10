import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import {FormsModule} from "@angular/forms";
import { OffresEmploiComponent } from './offres-emploi/offres-emploi.component';
import { ArticlesComponentComponent } from './articles-component/articles-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    OffresEmploiComponent,
    ArticlesComponentComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
