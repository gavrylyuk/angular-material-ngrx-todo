import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private message: string;

  constructor(private router: Router) { }

  clear(): void {
    localStorage.clear();
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('token') != null && !this.isTokenExpired();
  }

  isTokenExpired(): boolean {
    return false;
  }

  loginAdmin(): void {
    // tslint:disable-next-line: max-line-length
    localStorage.setItem('token', `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1NzEzMDEwMDMsImV4cCI6MTYwMjgzNzAwMywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoiVGVzdCBHdWFyZCIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjoiQWRtaW4ifQ.3sKYB4b-L5rieUzcMwOSPGG8YCahoWFgLBQD1MUYPuQ`);

    this.router.navigate(['/todo/admin']);
  }

  login(): void {
    // tslint:disable-next-line: max-line-length
    localStorage.setItem('token', `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1NzEzMDEwMDMsImV4cCI6MTYwMjgzNzAwMywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoiVGVzdCBHdWFyZCIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20ifQ.QBKoDoRizexfgUaXuaocvEi-mU2w4c4AnQNW55s3PtM`);

    this.router.navigate(['/todo']);
  }

  logout(): void {
    this.clear();
    this.router.navigate(['/authorization']);
  }

  decode() {
    return decode(localStorage.getItem('token'));
  }
}
