import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global_url } from '../global/url_back';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  public url: string;
  public algo: any;

  constructor(public _http: HttpClient) {
    this.url = global_url.url;
  }

  getCharacters(): Observable<any> {
    return this._http.get(this.url + 'characters/getCharacters', {
      headers: new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded',
      }),
    });
  }

  showCharacter(id: any): Observable<any> {
    return this._http.get(this.url + 'characters/showCharacter/' + id, {
      headers: new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded',
      }),
    });
  }

  registerCharacter(character: any): Observable<any> {
    let json = JSON.stringify(character);
    let params = 'json=' + json;

    return this._http.post(this.url + 'characters/registerCharacter', params, {
      headers: new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded',
      }),
    });
  }

  registerCharacterImage(fileCharacter: any): Observable<any> {
    return this._http.post(
      this.url + 'characters/registerCharacterImage',
      fileCharacter
    );
  }
}
