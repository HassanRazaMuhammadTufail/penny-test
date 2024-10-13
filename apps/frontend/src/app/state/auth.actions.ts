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
  props<{ email: string, password: string }>()
);

export const login = createAction(
  '[Auth] Login',
  props<{ email: string, password: string }>()
);

export const logout = createAction('[Auth] Logout');
