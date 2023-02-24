import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculService {

  constructor() {

  }
  getNumberOf(list:any[] ,critiria:string,value:any){
    let result=0;
    for(let i of list){
      if( i[critiria]===value){
        result ++;

      }
    }
    return result;
  }
}
