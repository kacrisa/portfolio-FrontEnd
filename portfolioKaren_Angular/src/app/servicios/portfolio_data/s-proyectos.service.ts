import { Proyectos } from './../../model/proyectos';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SProyectosService {
  expURL = 'http://localhost:8080/proyectos/'

  constructor(private http:HttpClient) { }

  public lista(): Observable<Proyectos[]>{
    return this.http.get<Proyectos[]>(this.expURL + 'listar');
  }

  public save(proyectos: Proyectos): Observable<any>{
    return this.http.post<any>(this.expURL + 'crear', proyectos);
  }

  public delete(id: number): Observable<any>{
    return this.http.delete<any>(this.expURL + `borrar/${id}`);
  }

}
