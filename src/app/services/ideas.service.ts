import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global_url } from '../global/url_back';

@Injectable({
  providedIn: 'root',
})
export class IdeasService {
  public url: string;
  constructor(public _http: HttpClient) {
    this.url = global_url.url;
  }

  getThemes(): Observable<any> {
    return this._http.get(this.url + 'ideas/getThemes', {
      headers: new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded',
      }),
    });
  }

  getIdeas(): Observable<any> {
    return this._http.get(this.url + 'ideas/getIdeas', {
      headers: new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded',
      }),
    });
  }

  registerIdea(idea: any): Observable<any> {
    let json = JSON.stringify(idea);
    let params = 'json=' + json;

    return this._http.post(this.url + 'ideas/createIdea', params, {
      headers: new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded',
      }),
    });
  }
}
