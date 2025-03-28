import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isLoggedIn = !!localStorage.getItem('user'); // Kiểm tra nếu có thông tin user
    if (!isLoggedIn) {
      this.router.navigate(['/login']); // Nếu chưa đăng nhập, chuyển đến Login
      return false;
    }
    return true;
  }
}
