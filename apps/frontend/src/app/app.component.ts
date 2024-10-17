import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthService } from './services/auth.service';
import { loginSuccess } from './state/auth.actions';
import { loadProducts } from './state/product.actions';

@Component({
  standalone: true,
  imports: [RouterModule, CommonModule, RouterOutlet, RouterLink, RouterLinkActive, ReactiveFormsModule, FormsModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private store: Store,
    private router: Router
  ) {}
  title = 'frontend';
  ngOnInit() {
    this.authService.getCurrentUser().subscribe((user: any) => {
      if (user) {
        this.store.dispatch(loginSuccess({ user }));
        this.store.dispatch(loadProducts());
        this.router.navigate(['/']);
      } else {
        this.router.navigate(['/login']);
      }
    });
  }
}