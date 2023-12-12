import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global_url } from '../global/url_back';

@Injectable({
  providedIn: 'root',
})
export class ThemesWorldService {
  public url: string;

  constructor(public _http: HttpClient) {
    this.url = global_url.url;
  }

  getThemesWorldAll(): Observable<any> {
    return this._http.get(this.url + 'themesWorld/getThemesWorldAll', {
      headers: new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded',
      }),
    });
  }

  // registerCreatureImage(fileCreature: any): Observable<any> {
  //   return this._http.post(
  //     this.url + 'creatures/registerCreatureImage',
  //     fileCreature
  //   );
  // }
}
