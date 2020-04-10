import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckFormService {

  constructor() { }
  
  checkInput(input){
    if(input == undefined)
    return false
    else return true
  }
}
