import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';



@Injectable()
export class AuthEffects {


  constructor(private actions$: Actions) {}
}

// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { of } from 'rxjs';
// import { catchError, map, mergeMap } from 'rxjs/operators';
// import { AuthService } from './auth.service'; // Assume this is your service for handling API requests
// import { login, loginSuccess, loginFailure } from './auth.actions';

// @Injectable()
// export class AuthEffects {

//   login$ = createEffect(() => this.actions$.pipe(
//     ofType(login),
//     mergeMap(action =>
//       this.authService.login(action.email, action.password).pipe(
//         map(user => loginSuccess({ user })),
//         catchError(() => of(loginFailure()))
//       )
//     )
//   ));

//   constructor(
//     private actions$: Actions,
//     private authService: AuthService
//   ) {}
// }
