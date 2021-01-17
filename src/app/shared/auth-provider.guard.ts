import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthProviderGuard implements CanActivate {
  constructor (private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
    const token = window.localStorage.getItem('94a08da1fecbb6e8b46990538c7b50b2');
      if(token) {
        return true;
      } else {
        this.router.navigate(['login']);
        return false;
      }
  }
}
