import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { makeServer } from './server';
import { BrowserRouter } from 'react-router-dom';
import { CategoryProvider } from './shared/context/category-context';
import { ProductFilterProvider } from './shared/context/product-filter-context';

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CategoryProvider>
        <ProductFilterProvider>
          <App />
        </ProductFilterProvider>
      </CategoryProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
