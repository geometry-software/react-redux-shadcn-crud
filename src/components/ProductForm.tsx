import { useState, useEffect, FormEvent } from 'react';
import { useProductActions } from '../context/ProductContext';
import type { Product } from '../types';

interface Props {
  current: Product | null;
}

export default function ProductForm({ current }: Props) {
  const { createProduct, editProduct } = useProductActions();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    if (current) {
      setTitle(current.title);
      setDescription(current.description);
      setPrice(String(current.price));
    } else {
      setTitle('');
      setDescription('');
      setPrice('');
    }
  }, [current]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const product = { title, description, price: Number(price), id: current?.id } as Product;
    if (current) {
      editProduct(product);
    } else {
      createProduct({ title, description, price: Number(price) });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 p-4 bg-white rounded shadow">
      <input className="w-full border p-2 rounded" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input className="w-full border p-2 rounded" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input className="w-full border p-2 rounded" placeholder="Price" type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        {current ? 'Update' : 'Add'} Product
      </button>
    </form>
  );
}
