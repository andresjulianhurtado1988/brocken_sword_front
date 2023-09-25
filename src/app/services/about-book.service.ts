import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global_url } from '../global/url_back';

@Injectable({
  providedIn: 'root',
})
export class AboutBookService {
  public url: string;

  constructor(public _http: HttpClient) {
    this.url = global_url.url;
  }

  getProtagonist(): Observable<any> {
    return this._http.get(this.url + 'world/getProtagonist', {
      headers: new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded',
      }),
    });
  }

  getBooks(): Observable<any> {
    return this._http.get(this.url + 'world/getBooks', {
      headers: new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded',
      }),
    });
  }
}
