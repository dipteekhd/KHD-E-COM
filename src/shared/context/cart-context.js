import React, { createContext, useContext, useReducer } from 'react';
import { cartReducer } from '../reducer';

const CartContext = createContext({});

const initialCartState = {
  totalProductsInCart: 0,
};

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);
  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
