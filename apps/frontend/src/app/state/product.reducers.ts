import { createReducer, on } from '@ngrx/store';
import { loadProducts } from './product.actions';

export interface ProductState {
  products: any[];
}

export const initialState: ProductState = {
  products: []
};

const _productReducer = createReducer(
  initialState,
  on(loadProducts, (state) => ({
    ...state, products: [{ name: 'Product 1', price: '$100' }, { name: 'Product 2', price: '$150' }]
  }))
);

export function productReducer(state: any, action: any) {
  return _productReducer(state, action);
}
