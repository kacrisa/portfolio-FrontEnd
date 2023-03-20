//referencia a persona.service

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from 'src/app/model/persona.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SPersonaService {

  URL = environment.apiURL + "persona/";

  constructor(private http:HttpClient) { }

  public lista(): Observable<Persona[]>{
    return this.http.get<Persona[]>(this.URL + 'listar');
  }

  public save(persona: Persona): Observable<any>{
    return this.http.post<any>(this.URL + 'crear', persona);
  }


}
