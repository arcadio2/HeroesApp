import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Auth } from '../interface/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string = environment.baseUrl;
  private _auth: Auth | undefined; 
  constructor(private http:HttpClient) { }

  get auth():Auth{
    return {...this._auth!}; 
  }

  login(){
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`).
      pipe(
        tap( resp => this._auth=resp),
        tap(auth => localStorage.setItem('token', auth.id))
      ); 
  }

  logout(){
    this._auth = undefined; 
  }
  verificar():Observable<boolean>{
    if(!localStorage.getItem('token')){
      return of(false);
    }
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/${localStorage.getItem('token')}`).
    pipe(
      map(auth => {
        this._auth = auth;
        return true; 
      })
    ); 
  }
}
