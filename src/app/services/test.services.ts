import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class testServices {
  constructor(private http: HttpClient) {
  }

  test(): Observable<string> {
    return this.http.get<string>(environment.api.url + 'test');
  }
}
