import { useProductActions } from '../context/ProductContext';
import type { Product } from '../types';

interface Props {
  product: Product;
  onSelect: (product: Product) => void;
}

export default function ProductItem({ product, onSelect }: Props) {
  const { removeProduct } = useProductActions();

  return (
    <div className="p-4 bg-white shadow rounded space-y-2">
      <h2 className="text-lg font-semibold">{product.title}</h2>
      <p>{product.description}</p>
      <p className="text-sm text-gray-700">${product.price}</p>
      <div className="flex gap-2">
        <button onClick={() => onSelect(product)} className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600">
          Edit
        </button>
        <button onClick={() => removeProduct(product.id)} className="px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700">
          Delete
        </button>
      </div>
    </div>
  );
}
