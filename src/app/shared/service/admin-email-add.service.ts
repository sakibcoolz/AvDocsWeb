import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { adminId } from '../model/admintoken.model';
import { urls } from './urls';

@Injectable({providedIn: 'root'})
export class AdminEmailAddService {
  constructor(private _httpClient: HttpClient) {

  }

  checkid(id: string) :Observable<adminId> {
    return this._httpClient.get<adminId>(urls.addEmailAdmin+'/'+id)
  }
}
