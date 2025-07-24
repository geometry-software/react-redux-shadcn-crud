import { createContext, useContext } from 'react';
import { useDispatch } from 'react-redux';
import type { ReactNode } from 'react';
import {
  fetchProducts,
  createProduct,
  editProduct,
  removeProduct,
} from '../store/effects/productsEffects';
import type { Product } from '../types';
import type { AppDispatch } from '../store/store';

interface ProductActions {
  fetchProducts: () => void;
  createProduct: (p: Omit<Product, 'id'>) => void;
  editProduct: (p: Product) => void;
  removeProduct: (id: number) => void;
}

const ProductContext = createContext<ProductActions>({
  fetchProducts: () => {},
  createProduct: () => {},
  editProduct: () => {},
  removeProduct: () => {},
});

export const useProductActions = () => useContext(ProductContext);

export function ProductProvider({ children }: { children: ReactNode }) {
  const dispatch = useDispatch<AppDispatch>();

  const actions: ProductActions = {
    fetchProducts: () => dispatch(fetchProducts()),
    createProduct: (p) => dispatch(createProduct(p)),
    editProduct: (p) => dispatch(editProduct(p)),
    removeProduct: (id) => dispatch(removeProduct(id)),
  };

  return (
    <ProductContext.Provider value={actions}>{children}</ProductContext.Provider>
  );
}
