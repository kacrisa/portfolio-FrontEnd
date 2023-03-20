import { Experiencia } from './../../model/experiencia';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SExperienciaService {

  expURL = environment.apiURL + "experiencia/";

  constructor(private http:HttpClient) { }

  public lista(): Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(this.expURL + 'listar');
  }

  public save(experiencia: Experiencia): Observable<any>{
    return this.http.post<any>(this.expURL + 'crear', experiencia);
  }

  public delete(id: number): Observable<any>{
    return this.http.delete<any>(this.expURL + `borrar/${id}`);
  }

}
