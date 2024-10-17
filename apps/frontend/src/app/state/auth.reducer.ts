import { createReducer, on } from '@ngrx/store';
import { signup, login, logout, signupFailure, signupSuccess, loginFailure, loginSuccess, logoutSuccess } from './auth.actions';

export const authFeatureKey = 'auth';
export interface AuthState {
  isAuthenticated: boolean;
  user: any | null;
  error: any | null;
}

export const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  error: null,
};

const _authReducer = createReducer(
  initialState,
  on(signup, (state, { email }) => ({
    ...state, isAuthenticated: true, user: { email }
  })),
   // Handle signup success
   on(signupSuccess, (state, { user }) => ({
    ...state,
    isAuthenticated: true,
    user,
    error: null
  })),

  // Handle signup failure
  on(signupFailure, (state, { error }) => ({
    ...state,
    error,
    isAuthenticated: false
  })),
  on(login, (state, { username }) => ({
    ...state, isAuthenticated: true, user: { username }
  })),

  // Handle login success
  on(loginSuccess, (state, { user }) => ({
    ...state,
    isAuthenticated: true,
    user,
    error: null
  })),

  // Handle login failure
  on(loginFailure, (state, { error }) => ({
    ...state,
    error,
    isAuthenticated: false
  })),
  on(logout, (state) => ({
    ...state, isAuthenticated: false, user: null
  })),
  on(logoutSuccess, () => initialState)
);

export function authReducer(state: any, action: any) {
  return _authReducer(state, action);
}



