import React, { createContext, useContext, useReducer } from 'react';
import { wishListReducer } from '../reducer/wish-list-reducer';

const initialWishListState = {
  totalProductsInwishList: 0,
};
const WishListContext = createContext({});

const WishListProvider = ({ children }) => {
  const [wishListState, wishListDispatch] = useReducer(
    wishListReducer,
    initialWishListState
  );

  return (
    <WishListContext.Provider value={{ wishListState, wishListDispatch }}>
      {children}
    </WishListContext.Provider>
  );
};

const useWishList = () => useContext(WishListContext);
export { WishListProvider, useWishList };
