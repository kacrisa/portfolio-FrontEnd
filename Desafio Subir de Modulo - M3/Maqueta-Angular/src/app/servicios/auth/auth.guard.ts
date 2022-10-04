import { AuthService } from 'src/app/servicios/auth/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  //Inyectamos las dependecias necesarias
  constructor(private authService: AuthService, private router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      //Preguntamos si el usuario esta logueado
      if (!this.authService.isUserLogIn()) {
        //Si no esta logueado, ir a la home
        this.router.navigate(['/']);
        return false;
      }


    return true;
  }
  
}
