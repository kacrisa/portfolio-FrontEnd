import { JwtDto } from './../../model/jwt-dto';
import { LoginUsuario } from './../../model/login-usuario';
import { Observable } from 'rxjs';
import { NuevoUsuario } from './../../model/nuevo-usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  //URL de nuestra api
  authURL = 'http://localhost:8080/auth/';

  //Inyectar dependencias en el constructor
  constructor(private http:HttpClient) {}

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
    return this.http.post<any>(this.authURL + 'nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto>{
    return this.http.post<JwtDto>(this.authURL + 'login', loginUsuario);
  }

}
