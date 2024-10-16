import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  // Function to call signup API
  signup(name: string, username: string, email: string, password: string): Observable<any> {
    return this.http.post('http://localhost:3000/users/signup', { name, username, email, password });
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post('http://localhost:3000/users/login', { username, password });
  }
}