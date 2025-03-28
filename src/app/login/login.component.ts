import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';
  constructor(private router: Router) {}
  onLogin() {
    if (this.email === 'admin' && this.password === '123456') {
      localStorage.setItem('user', JSON.stringify({ email: this.email }));
      this.router.navigate(['/dashboard']); 
    } else {
      this.errorMessage = 'Incorrect User!';
      console.log("🚀 ~ LoginComponent ~ onLogin ~ this.errorMessage:", this.errorMessage)
      
    }
  }
}
