import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { datarights, rightmaster, clinicright } from '../model/token.model';
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

  saverights(s: rightmaster): Observable<string> {
    return this._httpClient.post<string>(urls.saveRights, s ,{headers: this.headers})
  }

  getrightbyid(s: number): Observable<clinicright[]> {
    return this._httpClient.get<clinicright[]>(urls.getClinicRightsId+'/'+s)
  }

}
