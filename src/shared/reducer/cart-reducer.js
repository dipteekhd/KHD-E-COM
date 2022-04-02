import {
  INCREMENT_CART_COUNT,
  DECREMENT_CART_COUNT,
  INITIALIZE_CART_COUNT,
} from '../actions/types';
export const cartReducer = (state, action) => {
  console.log('cart reducer');
  switch (action.type) {
    case INITIALIZE_CART_COUNT: {
      return { ...state, totalProductsInCart: action.totalProductsInCart };
    }
    case INCREMENT_CART_COUNT: {
      return { ...state, totalProductsInCart: state.totalProductsInCart + 1 };
    }
    case DECREMENT_CART_COUNT: {
      return { ...state, totalProductsInCart: state.totalProductsInCart - 1 };
    }
  }
};
