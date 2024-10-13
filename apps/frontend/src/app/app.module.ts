import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthModule } from './auth/auth.module'; // Import AuthModule
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    // App components
  ],
  imports: [
    StoreDevtoolsModule.instrument({
        maxAge: 25, // Retain last 25 states
        // logOnly: environment.production, // log-only mode in production
      }),
    BrowserModule,
    AuthModule,  // Register AuthModule
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
