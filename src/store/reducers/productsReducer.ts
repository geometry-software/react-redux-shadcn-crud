import {
  SET_PRODUCTS,
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  SET_PRODUCT_LOADING,
  SET_PRODUCT_ERROR,
} from '../actions/productsActions';
import type { Product } from '../../types';

interface ProductsState {
  items: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  items: [],
  loading: false,
  error: null,
};

export default function productsReducer(
  state: ProductsState = initialState,
  action: any
): ProductsState {
  switch (action.type) {
    case SET_PRODUCT_LOADING:
      return { ...state, loading: action.payload };
    case SET_PRODUCT_ERROR:
      return { ...state, error: action.payload };
    case SET_PRODUCTS:
      return { ...state, items: action.payload };
    case ADD_PRODUCT:
      return { ...state, items: [action.payload, ...state.items] };
    case UPDATE_PRODUCT:
      return {
        ...state,
        items: state.items.map((p) => (p.id === action.payload.id ? action.payload : p)),
      };
    case DELETE_PRODUCT:
      return { ...state, items: state.items.filter((p) => p.id !== action.payload) };
    default:
      return state;
  }
}
