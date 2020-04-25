import { Clinic } from './../model/clinic.model';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { urls } from './urls';

@Injectable({providedIn: 'root'})
export class ClinicService {

  headers: HttpHeaders;
  constructor(private _httpClient: HttpClient, private _router: Router) {
    this.headers = new HttpHeaders({'Content-Type' : 'application/json'});
  }

  addClinic(clinic :Clinic): Observable<Clinic>{
    return this._httpClient.post<Clinic>(urls.addClinic, clinic,  {headers: this.headers})
  }

}
