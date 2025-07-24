import type { Dispatch } from 'redux';
import ProductService from '../../services/ProductService';
import {
  setProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  setProductLoading,
  setProductError,
} from '../actions/productsActions';
import type { Product } from '../../types';

const service = new ProductService();

export const fetchProducts = () => async (dispatch: Dispatch) => {
  dispatch(setProductLoading(true));
  try {
    const data = await service.getAll();
    dispatch(setProducts(data));
  } catch (err) {
    dispatch(setProductError(String(err)));
  } finally {
    dispatch(setProductLoading(false));
  }
};

export const createProduct = (product: Omit<Product, 'id'>) => async (dispatch: Dispatch) => {
  dispatch(setProductLoading(true));
  try {
    const data = await service.create(product);
    dispatch(addProduct(data));
  } catch (err) {
    dispatch(setProductError(String(err)));
  } finally {
    dispatch(setProductLoading(false));
  }
};

export const editProduct = (product: Product) => async (dispatch: Dispatch) => {
  dispatch(setProductLoading(true));
  try {
    await service.update(product.id, product);
    dispatch(updateProduct(product));
  } catch (err) {
    dispatch(setProductError(String(err)));
  } finally {
    dispatch(setProductLoading(false));
  }
};

export const removeProduct = (id: number) => async (dispatch: Dispatch) => {
  dispatch(setProductLoading(true));
  try {
    await service.delete(id);
    dispatch(deleteProduct(id));
  } catch (err) {
    dispatch(setProductError(String(err)));
  } finally {
    dispatch(setProductLoading(false));
  }
};
