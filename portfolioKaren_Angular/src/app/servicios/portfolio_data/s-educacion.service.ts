import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SEducacionService {
  expURL = 'http://localhost:8080/educacion/'

  constructor(private http:HttpClient) { }

  public lista(): Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.expURL + 'listar');
  }

  public save(educacion: Educacion): Observable<any>{
    return this.http.post<any>(this.expURL + 'crear', educacion);
  }

  public delete(id: number): Observable<any>{
    return this.http.delete<any>(this.expURL + `borrar/${id}`);
  }
}
