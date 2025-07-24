import type { Product } from '../../types';

export const SET_PRODUCTS = 'SET_PRODUCTS' as const;
export const ADD_PRODUCT = 'ADD_PRODUCT' as const;
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT' as const;
export const DELETE_PRODUCT = 'DELETE_PRODUCT' as const;
export const SET_PRODUCT_LOADING = 'SET_PRODUCT_LOADING' as const;
export const SET_PRODUCT_ERROR = 'SET_PRODUCT_ERROR' as const;

export const setProducts = (products: Product[]) => ({ type: SET_PRODUCTS, payload: products });
export const addProduct = (product: Product) => ({ type: ADD_PRODUCT, payload: product });
export const updateProduct = (product: Product) => ({ type: UPDATE_PRODUCT, payload: product });
export const deleteProduct = (id: number) => ({ type: DELETE_PRODUCT, payload: id });
export const setProductLoading = (loading: boolean) => ({ type: SET_PRODUCT_LOADING, payload: loading });
export const setProductError = (error: string) => ({ type: SET_PRODUCT_ERROR, payload: error });
