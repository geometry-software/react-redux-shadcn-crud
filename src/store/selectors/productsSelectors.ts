import type { RootState } from '../store';

export const selectProducts = (state: RootState) => state.products.items;
export const selectProductLoading = (state: RootState) => state.products.loading;
export const selectProductError = (state: RootState) => state.products.error;
