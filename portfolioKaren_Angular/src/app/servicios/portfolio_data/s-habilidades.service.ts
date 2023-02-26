import { Habilidades } from './../../model/habilidades';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SHabilidadesService {

  expURL = 'http://localhost:8080/habilidades/'

  constructor(private http:HttpClient) { }

  public lista(): Observable<Habilidades[]>{
    return this.http.get<Habilidades[]>(this.expURL + 'listar');
  }

  public save(habilidades: Habilidades): Observable<any>{
    return this.http.post<any>(this.expURL + 'crear', habilidades);
  }

  public delete(id: number): Observable<any>{
    return this.http.delete<any>(this.expURL + `borrar/${id}`);
  }
}
