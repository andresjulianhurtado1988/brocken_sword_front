import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global_url } from '../global/url_back';

@Injectable({
  providedIn: 'root',
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

  getRaces(): Observable<any> {
    return this._http.get(this.url + 'world/getRaces', {
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

  getStoryByChapter(chapter_id: number): Observable<any> {
    return this._http.get(
      this.url + 'world/getStoryByChapter/' + chapter_id,
      {
        headers: new HttpHeaders({
          'Content-type': 'application/x-www-form-urlencoded',
        }),
      }
    );
  }

  getChaptersByCharacter(
    book_id: number,
    character_id: number
  ): Observable<any> {
    return this._http.get(
      this.url + 'world/getChaptersByCharacter/' + book_id + '/' + character_id,
      {
        headers: new HttpHeaders({
          'Content-type': 'application/x-www-form-urlencoded',
        }),
      }
    );
  }

  registerChapter(chapter: any): Observable<any> {
    let json = JSON.stringify(chapter);
    let params = 'json=' + json;

    return this._http.post(this.url + 'world/registerChapter', params, {
      headers: new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded',
      }),
    });
  }

  registerChapterContent(chapter: any): Observable<any> {
    let json = JSON.stringify(chapter);
    let params = 'json=' + json;

    return this._http.post(this.url + 'world/registerChapterContent', params, {
      headers: new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded',
      }),
    });
  }

  getChapters(chapter_id: number): Observable<any> {
    return this._http.get(this.url + 'world/getChapters/' + chapter_id, {
      headers: new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded',
      }),
    });
  }
}
