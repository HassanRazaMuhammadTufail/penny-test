// import { createReducer, on } from '@ngrx/store';
// import { AuthActions } from './auth.actions';

export const authFeatureKey = 'auth';

// export interface State {

// }

// export const initialState: State = {

// };

// export const reducer = createReducer(
//   initialState,
// );

import { createReducer, on } from '@ngrx/store';
import { signup, login, logout } from './auth.actions';

export interface AuthState {
  isAuthenticated: boolean;
  user: any | null;
}

export const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

const _authReducer = createReducer(
  initialState,
  on(signup, (state, { email }) => ({
    ...state, isAuthenticated: true, user: { email }
  })),
  on(login, (state, { email }) => ({
    ...state, isAuthenticated: true, user: { email }
  })),
  on(logout, (state) => ({
    ...state, isAuthenticated: false, user: null
  }))
);

export function authReducer(state: any, action: any) {
  return _authReducer(state, action);
}



