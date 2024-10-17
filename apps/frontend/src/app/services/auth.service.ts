import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    constructor(
        private http: HttpClient,
        private storageService: StorageService
    ) {}

  // Function to call signup API
  signup(name: string, username: string, email: string, password: string): Observable<any> {
    return this.http.post('http://localhost:3000/users/signup', { name, username, email, password }).pipe(
        tap(user => this.storageService.setItem('userData', user))
    );
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post('http://localhost:3000/users/login', { username, password }).pipe(
        tap(user => this.storageService.setItem('userData', user))
    );
  }

  logout() {
    this.storageService.removeItem('userData');
  }

  getCurrentUser(): any {
    const userData = this.storageService.getItem('userData');
    return of(userData);
  }
}