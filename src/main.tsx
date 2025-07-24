import { StrictMode } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './store/store';
import { ProductProvider } from './context/ProductContext';

const container = document.getElementById('root') as HTMLElement;
const root: Root = createRoot(container);

root.render(
  <StrictMode>
    <Provider store={store}>
      <ProductProvider>
        <App />
      </ProductProvider>
    </Provider>
  </StrictMode>
);

