import React from 'react';
import { FILTER_BY_PRICE_RANGE } from '../../../shared/actions/types';
import { useProductFilter } from '../../../shared/context';

import './PriceRangeFilter.scss';

export const PriceRangeFilter = () => {
  const { state, dispatch } = useProductFilter();
  return (
    <>
      <h4>Price Range</h4>
      <div className="m-xs-all">
        <div className="priceRange">
          <div className="price">1K</div>
          <div className="price">2K</div>
          <div className="price">3K</div>
        </div>
        <input
          className="priceInput"
          type="range"
          max="3000"
          min="1000"
          value={state.priceRangeFilter}
          onChange={(e) =>
            dispatch({
              type: FILTER_BY_PRICE_RANGE,
              priceRange: e.target.value,
            })
          }
        />
      </div>
    </>
  );
};
