import { createSelector } from '@ngrx/store';

export const selectProducts = createSelector(
  (state: any) => state.products,
  (products: any) => products.products
);
