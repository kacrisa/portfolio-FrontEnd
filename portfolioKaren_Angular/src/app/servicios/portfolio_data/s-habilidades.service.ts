import { Habilidades } from './../../model/habilidades';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SHabilidadesService {

  expURL = environment.apiURL + "habilidades/";
  
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
