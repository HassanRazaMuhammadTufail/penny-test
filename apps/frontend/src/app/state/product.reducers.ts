import { createReducer, on } from '@ngrx/store';
import * as ProductActions from './product.actions';

export interface ProductState {
  products: any[];
  loading: boolean;
  error: any;
}

export const initialState: ProductState = {
  products: [],
  loading: false,
  error: null
};

export const productReducer = createReducer(
  initialState,
  on(ProductActions.loadProducts, state => ({
    ...state,
    loading: true
  })),
  on(ProductActions.loadProductsSuccess, (state, { products }) => ({
    ...state,
    products,
    loading: false
  })),
  on(ProductActions.loadProductsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  }))
);