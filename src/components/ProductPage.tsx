import PageComponent from './PageComponent';
import ProductList from './ProductList';

export default function ProductPage() {
  return (
    <PageComponent>
      <h1 className="text-2xl font-bold mb-4">Products CRUD</h1>
      <ProductList />
    </PageComponent>
  );
}
