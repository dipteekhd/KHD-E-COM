import {
  FILTER_BY_CATEGORY,
  FILTER_BY_RATING,
  SORT_BY_PRICE,
  FILTER_BY_PRICE_RANGE,
  CLEAR_ALL_FILTER,
} from '../actions/types';
import { productFilterState } from '../context/product-filter-state';

export const productFilterReducer = (state, action) => {
  switch (action.type) {
    case FILTER_BY_CATEGORY: {
      const { categoryName } = action;

      return {
        ...state,
        categoryFilter: {
          ...state.categoryFilter,
          [categoryName]: !state.categoryFilter[categoryName],
        },
      };
    }

    case FILTER_BY_RATING: {
      return {
        ...state,
        ratingFilter: action.ratingValue,
      };
    }

    case SORT_BY_PRICE: {
      return {
        ...state,
        priceSortCriteria: action.sortCriteria,
      };
    }

    case FILTER_BY_PRICE_RANGE: {
      return {
        ...state,
        priceRangeFilter: action.priceRange,
      };
    }

    case CLEAR_ALL_FILTER: {
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
