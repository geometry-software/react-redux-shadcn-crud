import products from '../data/products.json';
import type { Product } from '../types';

let data: Product[] = products as Product[];

export default class ProductMockProvider {
  async getAll(): Promise<Product[]> {
    return [...data];
  }

  async create(product: Omit<Product, 'id'>): Promise<Product> {
    const newProduct: Product = { ...product, id: Date.now() } as Product;
    data = [newProduct, ...data];
    return newProduct;
  }

  async update(id: number, product: Product): Promise<Product> {
    data = data.map((p) => (p.id === id ? product : p));
    return product;
  }

  async delete(id: number): Promise<void> {
    data = data.filter((p) => p.id !== id);
  }
}
