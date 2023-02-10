import { Component, OnInit } from '@angular/core';
import {Article} from "../core/model/article";

@Component({
  selector: 'app-articles-component',
  templateUrl: './articles-component.component.html',
  styleUrls: ['./articles-component.component.css']
})
export class ArticlesComponentComponent implements OnInit {
  titre = 'Les articles du jour';
  listeArticles: Article[] = [
    { titre: 'le champion du monde', contenu: 'le champion du monde est', auteur: 'medTaher',date:'12/12/2015',category:'sport' },
    { titre: 'les nouveaux parents', contenu: 'les nouveaux parents', auteur: 'AhmedSaid',date:'11/11/2018',category:'Education' },
    { titre: 'comment écrire votre CV', contenu: 'Pour réussir a décroche un emploi', auteur: 'MarieElsa',date:'02/04/2017',category:'Travail' },

  ];
  nombreArticle!:number;
  constructor() { }

  ngOnInit(): void {
    this.nombreArticle=this.listeArticles.length;
  }

}
