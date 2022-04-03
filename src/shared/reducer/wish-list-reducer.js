import {
  INITIALIZE_WISH_COUNT,
  DECREMENT_WISH_COUNT,
  INCREMENT_WISH_COUNT,
} from '../../shared/actions/types';

export const wishListReducer = (state, action) => {
  switch (action.type) {
    case INITIALIZE_WISH_COUNT: {
      return {
        ...state,
        totalProductsInwishList: action.payload.totalProductsInwishList,
      };
    }
    case INCREMENT_WISH_COUNT: {
      return {
        ...state,
        totalProductsInwishList: state.totalProductsInwishList + 1,
      };
    }
    case DECREMENT_WISH_COUNT: {
      return {
        ...state,
        totalProductsInwishList: state.totalProductsInwishList - 1,
      };
    }
    default: {
      throw new Error(`unknown action-${action.type}`);
    }
  }
};
