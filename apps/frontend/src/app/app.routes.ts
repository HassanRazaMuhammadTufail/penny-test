import { Route } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';

export const appRoutes: Route[] = [
    { path: 'signup', component: SignupComponent },
  { path: '', component: LoginComponent },
  { path: 'products', component: ProductsComponent },
];
