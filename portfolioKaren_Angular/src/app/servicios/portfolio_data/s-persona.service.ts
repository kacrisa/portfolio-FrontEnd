//referencia a persona.service

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from 'src/app/model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class SPersonaService {
  URL = 'http://localhost:8080/persona/'

  constructor(private http:HttpClient) { }

  public lista(): Observable<Persona[]>{
    return this.http.get<Persona[]>(this.URL + 'listar');
  }

  public save(persona: Persona): Observable<any>{
    return this.http.post<any>(this.URL + 'crear', persona);
  }


}
