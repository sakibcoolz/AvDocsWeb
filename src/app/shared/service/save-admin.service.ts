import { AddAdmin } from 'src/app/shared/model/add-admin.model';
import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable } from 'rxjs';
import { urls } from './urls';

@Injectable({ providedIn: "root" })
export class SaveAdminService {
  headers: HttpHeaders;
  constructor(private _httpClient: HttpClient, private _router: Router) {
    this.headers = new HttpHeaders({ "Content-Type": "application/json" });
  }

  saveAdmin(s : AddAdmin): Observable<AddAdmin> {
    return this._httpClient.post<AddAdmin>(urls.saveadmin, s, {headers: this.headers});
  }



}
