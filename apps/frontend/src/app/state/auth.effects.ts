import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../services/auth.service';  // Service for API calls
import { signup, signupSuccess, signupFailure, login, loginFailure, loginSuccess } from './auth.actions';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as AuthActions from './auth.actions';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  private actions$ = inject(Actions);
  // Effect to handle signup
  signup$ = createEffect(() => this.actions$.pipe(
    ofType(signup), // Listen for the signup action
    mergeMap(action => 
      this.authService.signup(action.name, action.username, action.email, action.password).pipe( // Call the API
        map(user => signupSuccess({ user })), // Dispatch success action if API call is successful
        catchError(error => of(signupFailure({ error }))) // Dispatch failure action if API fails
      )
    )
  ));

  // Effect to handle login
  login$ = createEffect(() => this.actions$.pipe(
    ofType(login), // Listen for the login action
    mergeMap(action => 
      this.authService.login(action.username, action.password).pipe( // Call the API
        map(user => loginSuccess({ user })), // Dispatch success action if API call is successful
        catchError(error => of(loginFailure({ error }))) // Dispatch failure action if API fails
      )
    )
  ));

  logout$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.logout),
    tap(() => {
      this.authService.logout();
      this.router.navigate(['/login']);
    }),
    map(() => AuthActions.logoutSuccess())
  ));

  constructor(
    // private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}
