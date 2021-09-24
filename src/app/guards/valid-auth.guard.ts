import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../api/auth.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ValidAuthGuard implements CanActivate {
  constructor(
    //* |-> Servicio API donde validaremos que exista el token y devulva la data correspondiente
    private authservice : AuthService,
    //* |-> Router que cambiara de ruta cuando el usuario no este autorizado
    private router : Router
  ) {
    
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
    return this.authservice.renew_token().pipe(
      tap( isAuth => {
        if (!isAuth) {
          this.router.navigateByUrl('/sign-in')
        }
      } )
    )
  }
  
}
