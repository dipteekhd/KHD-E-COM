import React, { createContext, useContext, useReducer } from 'react';
import { productFilterReducer } from '../reducer/product-filter-reducer';
import { productFilterState } from './product-filter-state';

const ProductFilterContext = createContext();

const ProductFilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    productFilterReducer,
    productFilterState
  );
  console.log(state);

  return (
    <ProductFilterContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductFilterContext.Provider>
  );
};

const useProductFilter = () => useContext(ProductFilterContext);

export { ProductFilterProvider, useProductFilter };
