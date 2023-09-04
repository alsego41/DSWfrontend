import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core'
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = async (route, state) => {
  console.log("authGuard#canActivate called")
  const authService = inject(AuthService)
  const router = inject(Router)
  const authRes = await authService.login()
  if (authRes) {
    return true
  } else {
    return router.parseUrl('/login')
  }
};
