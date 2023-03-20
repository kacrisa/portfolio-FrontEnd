import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SEducacionService {
  
  expURL = environment.apiURL + "educacion/";
  
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
