import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: any;
  user: any;

  constructor(private http : Http) { }

  regUser(user){
    let headers = new Headers()
    headers.append('Content-Type','application/json')
    return this.http.post(
      'http://localhost:5000/hd/auth/reg', 
      user,
      {headers}
    )
    .pipe(map(res => res.json()))
    
  }

  loginUser(user){
    let headers = new Headers()
    headers.append('Content-Type','application/json')
    return this.http.post(
      'http://localhost:5000/hd/auth/login', 
      user,
      {headers}
    )
    .pipe(map(res => res.json()))
    
  }

  storeUser(token, user){
    localStorage.setItem('token',token),
    localStorage.setItem('user', JSON.stringify(user))
  this.token = token;
  this.user = user;
  }
}




