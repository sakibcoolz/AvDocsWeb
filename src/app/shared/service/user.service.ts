import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { urls } from './urls';

@Injectable({providedIn: 'root'})
export class UserService {
  headers: HttpHeaders;
  constructor(private _httpClient: HttpClient, private _router: Router) {
    this.headers = new HttpHeaders({'Content-Type' : 'application/json'});
  }

  getHtml(){
    return this._httpClient.get(urls.gethtml, {responseType:"text"} )
  }


}
