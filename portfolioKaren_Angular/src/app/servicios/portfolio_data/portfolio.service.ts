//referencia a persona.service

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from 'src/app/model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  URL = 'http://localhost:8080/personas/'

  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<Persona>{
    return this.http.get<Persona>(this.URL+'buscar/perfil');
  }
}


//Chequear este ObtnerDatos, a ver si anda ahora con el /perfil