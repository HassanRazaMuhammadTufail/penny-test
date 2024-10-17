import { Route } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { authGuard } from './auth/auth.guard';

export const appRoutes: Route[] = [
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    { path: '', component: ProductsComponent, canActivate: [authGuard] },
    { path: '**', redirectTo: '' }
];
