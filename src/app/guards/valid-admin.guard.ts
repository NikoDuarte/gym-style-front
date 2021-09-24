import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { AuthService } from '../api/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ValidAdminGuard implements CanActivate {
  constructor(
    //* |-> Donde se almacenara el role del usuario
    private authService : AuthService,
    //* |-> Router
    private router : Router
  ) {
    
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
    if (this.authService.users.role === 'ADMIN-ROLE') {
      return true
    }else{
      this.router.navigateByUrl('/gym-style/home')
      return false
    }
    
  }
  
}
