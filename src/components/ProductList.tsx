import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import ProductForm from './ProductForm';
import { useProductActions } from '../context/ProductContext';
import {
  selectProducts,
  selectProductLoading,
  selectProductError,
} from '../store/selectors/productsSelectors';
import type { Product } from '../types';

export default function ProductList() {
  const { fetchProducts } = useProductActions();
  const products = useSelector(selectProducts);
  const loading = useSelector(selectProductLoading);
  const error = useSelector(selectProductError);
  const [selected, setSelected] = useState<Product | null>(null);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('title');

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const filtered = products
    .filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === 'price') {
        return a.price - b.price;
      }
      return a.title.localeCompare(b.title);
    });

  return (
    <div className="space-y-4">
      <ProductForm current={selected} />
      <div className="flex gap-2">
        <input className="border p-2 rounded" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
        <select className="border p-2 rounded" value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="title">Title</option>
          <option value="price">Price</option>
        </select>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}
      {filtered.map((product) => (
        <ProductItem key={product.id} product={product} onSelect={setSelected} />
      ))}
    </div>
  );
}
