import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { makeServer } from './server';
import { BrowserRouter } from 'react-router-dom';

import {
  ProductFilterProvider,
  AuthProvider,
  CategoryProvider,
  WishListProvider,
  AlertMessageProvider,
} from './shared/context';

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AlertMessageProvider>
        <AuthProvider>
          <CategoryProvider>
            <ProductFilterProvider>
              <WishListProvider>
                <App />
              </WishListProvider>
            </ProductFilterProvider>
          </CategoryProvider>
        </AuthProvider>
      </AlertMessageProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
