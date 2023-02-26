import { Idiomas } from './../../model/idiomas';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SIdiomasService {

  expURL = 'http://localhost:8080/idiomas/'

  constructor(private http:HttpClient) { }

  public lista(): Observable<Idiomas[]>{
    return this.http.get<Idiomas[]>(this.expURL + 'listar');
  }

  public save(idiomas: Idiomas): Observable<any>{
    return this.http.post<any>(this.expURL + 'crear', idiomas);
  }

  public delete(id: number): Observable<any>{
    return this.http.delete<any>(this.expURL + `borrar/${id}`);
  }
}
