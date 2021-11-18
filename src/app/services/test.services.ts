import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class testServices {
  apiroot: string = "https://intense-escarpment-15728.herokuapp.com/";
  constructor(private http: HttpClient) {
  }

  test(): Observable<any> {
    // @ts-ignore
    return this.http.get<any>(this.apiroot + 'test');
  }
}
