import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global_url } from '../global/url_back';

@Injectable({
  providedIn: 'root'
})
export class WorldService {

  public url: string;

  constructor(public _http: HttpClient) {
    this.url = global_url.url;
  }

  
  getMagicSystem(): Observable<any> {
    return this._http.get(this.url + 'world/getMagicSystem', {
      headers: new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded',
      }),
    });
  }

  getRaces(): Observable<any>{
    return this._http.get(this.url + 'world/getRaces', {
      headers: new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded',
      }),
    });
  }
}
