import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, of } from 'rxjs';
import * as jwt from 'jsonwebtoken';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private jwtHelper = new JwtHelperService();

  login(username: string, password: string): Observable<string | null> {
    // In a real-world scenario, you would send the credentials to a server and get a token in response.
    // For simplicity, we'll just create a mock token here.
    const mockToken = this.createMockToken(username);

    // Save the token to local storage
    localStorage.setItem('token', mockToken);

    return of(mockToken);
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');

    // Check whether the token is expired
    return !this.jwtHelper.isTokenExpired(token || '');
  }

  private createMockToken(username: string): string {
    // In a real-world scenario, you would create a token on the server.
    // For simplicity, we'll just create a mock token here.
    const payload = { sub: username, role: 'user' };
    return jwt.sign(payload, 'secret-key', { expiresIn: '1h' });
  }
}
