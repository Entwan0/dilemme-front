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

  test(): Observable<number> {
    // @ts-ignore
    return this.http.get<number>(environment.api.url + 'test');
  }
}
