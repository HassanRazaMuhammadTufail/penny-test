import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { logout } from '../state/auth.actions';
import { Observable } from 'rxjs';
import { selectProducts } from '../state/product.selectors';
import { loadProducts } from '../state/product.actions';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [AsyncPipe, NgForOf, NgIf, MatCardModule, MatButtonModule, MatGridListModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products$: Observable<any>;

  constructor(private store: Store) {
    this.products$ = this.store.select(selectProducts);
  }

  ngOnInit() {
    this.store.dispatch(loadProducts());
  }

  logout() {
    this.store.dispatch(logout());
  }
}
