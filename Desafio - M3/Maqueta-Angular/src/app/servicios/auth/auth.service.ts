import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  //URL de nuestra api
  private strUrlApi:string;

  //Inyectar dependencias en el constructor
  constructor(private http:HttpClient, private router:Router) {
    //Ruta de nuestro archivo json(en nuestro ejemplo local)
    this.strUrlApi= '../assets/data/user.json';
  }
  //Login Udemy:
  // sendCredentials(email:string, password:string): void {
  //   console.log(email,password);
  // }

  public loginSimple(email:string, password:string): void {
    //Llamada a la API
    this.http.get(this.strUrlApi).subscribe(
      (response:any) => {
        if (response.token !== null) {
          //Guardamos el token
          localStorage.setItem('token', response.token);
          this.router.navigate(['/']);
        }
      }
    );
  }
  
  public logout(): void {
    //Al cerrar sesion eliminamos al token
    localStorage.removeItem('token');
    //Redireccionar
    this.router.navigate(['/']);
  }

  public isUserLogIn(): boolean {
    return localStorage.getItem('token') !== null;
  }
}
