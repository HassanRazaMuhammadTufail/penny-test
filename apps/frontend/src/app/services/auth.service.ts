import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  // Function to call signup API
  signup(email: string, password: string): Observable<any> {
    return this.http.post('http://localhost:3000/users/signup', { email, password });
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post('http://localhost:3000/users/login', { email, password });
  }
}