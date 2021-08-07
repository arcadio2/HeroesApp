import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../interfaces/heroes.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes`);
  }

  getHeroeID(id:string): Observable<Heroe>{
    return this.http.get<Heroe>(`${this.baseUrl}/heroes/${id}`);
  }

  getSugerencias(name: string):Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes?q=${name}&_limit=6`);
  }

  addHeroe(heroe:Heroe):Observable<Heroe>{
    return this.http.post<Heroe>(`${this.baseUrl}/heroes`, heroe);
  }
  editHeroe(heroe:Heroe):Observable<Heroe>{
    return this.http.put<Heroe>(`${this.baseUrl}/heroes/${heroe.id}`, heroe);
  }
  deleteHeroe(heroe:Heroe):Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}/heroes/${heroe.id}`);
  }

}
