import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class gameService {
  path:string = "http://localhost:5000/"

  constructor(private http: HttpClient) {
  }

  follow(): Observable<number> {
    return this.http.post<number>(this.path + 'play',"follow");
  }

  betray(): Observable<number> {
    return this.http.post<number>(this.path + 'play',"betray");
  }

  surrend(): Observable<number> {
    return this.http.post<number>(this.path + 'play',"ff");
  }

  leave(player:number): Observable<number>{
    return this.http.post<number>(this.path + 'leave',player);
  }

  getPlayer(): Observable<number>{
    return this.http.get<number>(this.path + 'player');
  }
}
