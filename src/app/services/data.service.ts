import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _jsonURL = 'assets/faqs.json';
  constructor(private http: HttpClient) { }

  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }
}
