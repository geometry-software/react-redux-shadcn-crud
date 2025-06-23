import { StrictMode } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './store/store';

const container = document.getElementById('root') as HTMLElement;
const root: Root = createRoot(container);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

