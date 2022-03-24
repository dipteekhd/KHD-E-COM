import * as ACTIONS from '../actions/types';
import { productFilterState } from '../context/product-filter-state';

export const productFilterReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.FILTER_BY_CATEGORY: {
      const { categoryName } = action;

      return {
        ...state,
        categoryFilter: {
          ...state.categoryFilter,
          [categoryName]: !state.categoryFilter[categoryName],
        },
      };
    }

    case ACTIONS.FILTER_BY_RATING: {
      return {
        ...state,
        ratingFilter: action.ratingValue,
      };
    }

    case ACTIONS.SORT_BY_PRICE: {
      return {
        ...state,
        priceSortCriteria: action.sortCriteria,
      };
    }

    case ACTIONS.FILTER_BY_PRICE_RANGE: {
      return {
        ...state,
        priceRangeFilter: action.priceRange,
      };
    }

    case ACTIONS.CLEAR_ALL_FILTER: {
      return {
        ...state,
        ...productFilterState,
      };
    }

    default: {
      throw new Error(`unknown action-${action.type}`);
    }
  }
};
