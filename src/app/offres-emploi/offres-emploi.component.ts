import { Component, OnInit } from '@angular/core';
import {Product} from "../core/model/product";
import {Emploi} from "../core/model/emploi";

@Component({
  selector: 'app-offres-emploi',
  templateUrl: './offres-emploi.component.html',
  styleUrls: ['./offres-emploi.component.css']
})
export class OffresEmploiComponent implements OnInit {
  title : string ="welcome maram"
  listeEmploi! :Emploi[];
  chercherParEntreprise!:string;
  constructor() { }

  ngOnInit(): void {

  this.listeEmploi =[
    {reference:"abc",titre:"enseignant",entreprise:"esprit",etat:true},
    {reference:'def',titre:'developpeur',entreprise:'Actia',etat:false},
    {reference:'jhi',titre:'freelancer',entreprise:'',etat:true}
  ];

}
  postuler(emploi: Emploi) {
    console.log(`Vous avez postule pour l'emploi "${emploi.titre}" chez "${emploi.entreprise}"`);
  }
  bilan() {
    const nombreEmploisOuverts = this.listeEmploi.filter(emploi => emploi.etat).length;
    console.log(`Il y a ${nombreEmploisOuverts} offres d'emploi ouvertes.`);
  }}
