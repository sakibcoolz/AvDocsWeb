import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { datarights } from '../model/token.model';
import { urls } from './urls';

@Injectable({providedIn: 'root'})
export class RightsService {

  headers: HttpHeaders;
  constructor(private _httpClient: HttpClient, private _router: Router) {
    this.headers = new HttpHeaders({'Content-Type' : 'application/json'});
  }

  allrights(): Observable<datarights[]> {
    return this._httpClient.get<datarights[]>(urls.sendAllrights, {headers: this.headers})
  }

}
