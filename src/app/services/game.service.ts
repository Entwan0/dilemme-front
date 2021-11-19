import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class gameService {
  path:string = "http://localhost:5000/"

  constructor(private http: HttpClient) {
  }

  follow(): Observable<string> {
    return this.http.post(this.path + 'play',"follow" ,{ responseType: 'text' });
  }

  betray(): Observable<string> {
    return this.http.post(this.path + 'play',"betray" ,{ responseType: 'text' });
  }

  surrend(): Observable<string> {
    return this.http.post(this.path + 'play',"ff" ,{ responseType: 'text' });
  }

  leave(player:number): Observable<number>{
    return this.http.post<number>(this.path + 'leave',player);
  }

  getPlayer(): Observable<number>{
    return this.http.get<number>(this.path + 'player');
  }

  wait(player:number): Observable<boolean>{
    return this.http.post<boolean>(this.path + 'waitOtherPLayer',player);
  }
}
