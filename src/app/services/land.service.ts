import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global_url } from '../global/url_back';

@Injectable()
export class LandService {
  public url: string;

  constructor(public _http: HttpClient) {
    this.url = global_url.url;
  }

  getLands(): Observable<any> {
    return this._http.get(this.url + 'world/getLands', {
      headers: new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded',
      }),
    });
  }

  showLand(id: any): Observable<any> {
    return this._http.get(this.url + 'world/showLand/' + id, {
      headers: new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded',
      }),
    });
  }
}
