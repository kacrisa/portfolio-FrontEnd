import { Idiomas } from './../../model/idiomas';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SIdiomasService {
  
  expURL = environment.apiURL + "idiomas/";

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
