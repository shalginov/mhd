import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http : Http) { }

  addTicket(user){
    let headers = new Headers()
    headers.append('Content-Type','application/json')
    return this.http.post(
      'http://localhost:5000/hd/ticket/add', 
      user,
      {headers}
    )
    .pipe(map(res => res.json()))
    
  }

}