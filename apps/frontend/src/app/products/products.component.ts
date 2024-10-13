import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { logout } from '../state/auth.actions';
import { Observable } from 'rxjs';
import { selectProducts } from '../state/product.selectors';
import { loadProducts } from '../state/product.actions';

@Component({
  selector: 'app-products',
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
