import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { AuthEffects } from './state/auth.effects';
import { authReducer } from './state/auth.reducer';
import { provideHttpClient } from '@angular/common/http';
import { ProductEffects } from './state/product.effects';
import { productReducer } from './state/product.reducers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes, withHashLocation()),
    provideStore({ auth: authReducer, products: productReducer }),
    provideEffects([AuthEffects, ProductEffects]),
    provideHttpClient() ,
    provideStoreDevtools({
      maxAge: 25,
      logOnly: false
    })
  ],
};
