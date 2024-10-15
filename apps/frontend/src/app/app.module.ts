// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { StoreModule } from '@ngrx/store';
// import { EffectsModule } from '@ngrx/effects';
// import { AuthModule } from './auth/auth.module'; // Import AuthModule
// import { AppComponent } from './app.component';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { authReducer } from './state/auth.reducer';
// import { productReducer } from './state/product.reducers';
// import { AuthEffects } from './state/auth.effects';
// import { LoginComponent } from './login/login.component';
// import { SignupComponent } from './signup/signup.component';
// import { RouterModule } from '@angular/router';
// import { appRoutes } from './app.routes';

// @NgModule({
//   declarations: [
//     // App components
//     AppComponent,
//     SignupComponent,
//     LoginComponent
//   ],
//   imports: [
//     BrowserModule,
//     AuthModule,  // Register AuthModule
//     RouterModule.forRoot(appRoutes),
//     StoreModule.forRoot({ auth: authReducer, products: productReducer }),
//     EffectsModule.forRoot([AuthEffects]),
//     StoreDevtoolsModule.instrument({
//         maxAge: 25, // Retain last 25 states
//         // logOnly: environment.production, // log-only mode in production
//         logOnly: false
//       }),
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
