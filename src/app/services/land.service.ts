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
    return this._http.get(this.url + 'land/getLands', {
      headers: new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded',
      }),
    });
  }

  getAllLands(): Observable<any> {
    return this._http.get(this.url + 'land/getAllLands', {
      headers: new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded',
      }),
    });
  }

  showLand(id: any): Observable<any> {
    return this._http.get(this.url + 'land/showLand/' + id, {
      headers: new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded',
      }),
    });
  }

  registerMysticalLandImage(fileLand: any): Observable<any> {
    return this._http.post(
      this.url + 'land/registerMysticalLandImage',
      fileLand
    );
  }

  getAllMysticalPlaces(): Observable<any> {
    return this._http.get(this.url + 'land/getAllMysticalPlaces', {
      headers: new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded',
      }),
    });
  }

  getMysticalPlace(mystical_place_id: number): Observable<any> {
    return this._http.get(
      this.url + 'land/getMysticalPlace/' + mystical_place_id,
      {
        headers: new HttpHeaders({
          'Content-type': 'application/x-www-form-urlencoded',
        }),
      }
    );
  }

  registerMysticalPlace(mystical_place: any): Observable<any> {
    let json = JSON.stringify(mystical_place);
    let params = 'json=' + json;

    return this._http.post(this.url + 'land/registerMysticalPlace', params, {
      headers: new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded',
      }),
    });
  }
  registerMysticalPlaceImage(fileMysticalPlace: any): Observable<any> {
    return this._http.post(
      this.url + 'land/registerMysticalPlaceImage',
      fileMysticalPlace
    );
  }

  getMysticalPlaceAllImages(mystical_place_id: number): Observable<any> {
    return this._http.get(
      this.url + 'land/getMysticalPlaceAllImages/' + mystical_place_id,
      {
        headers: new HttpHeaders({
          'Content-type': 'application/x-www-form-urlencoded',
        }),
      }
    );
  }
}
