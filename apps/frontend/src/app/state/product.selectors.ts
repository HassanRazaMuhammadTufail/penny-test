import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface ProductState {
  products: any[];
  loading: boolean;
  error: any;
}

export const selectProductState = createFeatureSelector<ProductState>('products');

export const selectProducts = createSelector(
  selectProductState,
  state => state.products
);