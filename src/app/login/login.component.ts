import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  login(): void {
    this.authService.login(this.username, this.password).subscribe(
      (token) => {
        console.log('Login successful');
        // Redirect or perform other actions upon successful login
      },
      (error) => {
        console.error('Login failed', error);
        // Handle login failure
      }
    );
  }
}
