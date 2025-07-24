import ExpoHttpService from './ExpoHttpService';
import ProductMockProvider from './ProductMockProvider';
import type { Product } from '../types';

const provider = new ProductMockProvider();

export default class ProductService extends ExpoHttpService<Product> {
  constructor() {
    super('https://jsonplaceholder.typicode.com/products');
  }

  async getAll() {
    return provider.getAll();
  }

  async create(data: Omit<Product, 'id'>) {
    return provider.create(data);
  }

  async update(id: number, product: Product) {
    return provider.update(id, product);
  }

  async delete(id: number) {
    return provider.delete(id);
  }
}
