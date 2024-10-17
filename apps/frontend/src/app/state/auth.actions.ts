// import { createActionGroup, emptyProps, props } from '@ngrx/store';

// export const AuthActions = createActionGroup({
//   source: 'Auth',
//   events: {
//     'Auth Auths': emptyProps(),
    
    
//   }
// });
import { createAction, props } from '@ngrx/store';

export const signup = createAction(
  '[Auth] Signup',
  props<{ name: string; username: string; email: string, password: string }>()
);

// Action dispatched on successful signup
export const signupSuccess = createAction(
  '[Auth] Signup Success',
  props<{ user: any }>()
);

// Action dispatched on signup failure
export const signupFailure = createAction(
  '[Auth] Signup Failure',
  props<{ error: any }>()
);

export const login = createAction(
  '[Auth] Login',
  props<{ username: string, password: string }>()
);

// Action dispatched on successful login
export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ user: any }>()
);

// Action dispatched on login failure
export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: any }>()
);

export const logout = createAction('[Auth] Logout');
export const logoutSuccess = createAction('[Auth] Logout Success');
