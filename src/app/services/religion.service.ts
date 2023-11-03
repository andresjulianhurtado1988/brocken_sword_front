import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global_url } from '../global/url_back';

@Injectable({
  providedIn: 'root',
})
export class ReligionService {
  public url: string;

  constructor(public _http: HttpClient) {
    this.url = global_url.url;
  }

  getAllJudges(): Observable<any> {
    return this._http.get(this.url + 'religion/getAllJudges', {
      headers: new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded',
      }),
    });
  }

  getJudge(id: any): Observable<any> {
    return this._http.get(this.url + 'religion/getJudge/' + id, {
      headers: new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded',
      }),
    });
  }

  getDeity(id: any): Observable<any> {
    return this._http.get(this.url + 'religion/getDeity/' + id, {
      headers: new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded',
      }),
    });
  }

  getOrders(): Observable<any> {
    return this._http.get(this.url + 'religion/getOrders', {
      headers: new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded',
      }),
    });
  }
}
