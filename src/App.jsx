import './App.scss';
import React from 'react';
import {
  Header,
  ProductList,
  ProductWishList,
  ProductCartList,
  Home,
} from './components';
import { Route, Routes } from 'react-router-dom';
import { Login, Signup } from './components/authentication';
import { AlertMessage } from './shared/components';
const App = () => {
  return (
    <>
      <Header></Header>
      <AlertMessage></AlertMessage>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/productWishList" element={<ProductWishList />} />
          <Route path="/productCart" element={<ProductCartList />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
