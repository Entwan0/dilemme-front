import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class gameService {
  constructor(private http: HttpClient) {
  }

  follow(): Observable<number> {
    return this.http.post<number>(environment.api.url + 'play',"follow");
  }

  betray(): Observable<number> {
    return this.http.post<number>(environment.api.url + 'play',"betray");
  }

  surrend(): Observable<number> {
    return this.http.post<number>(environment.api.url + 'play',"ff");
  }
}
