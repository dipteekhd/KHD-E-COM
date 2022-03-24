import React from 'react';
import * as ACTIONS from '../../../shared/actions/types';
import { useProductFilter } from '../../../shared/context';

export const PriceSortFilter = () => {
  const { state, dispatch } = useProductFilter();
  const { priceSortCriteria } = state;
  return (
    <>
      <h4>Sort by</h4>
      <ul className="list">
        {[
          { key: 'highToLowPrice', label: 'High To Low' },
          { key: 'lowToHighPrice', label: 'Low to High' },
        ].map((sortCriteria) => (
          <li key={sortCriteria.key} className="list__input m-xs-all">
            <label htmlFor={sortCriteria.key} className="center-content">
              <input
                id={sortCriteria.key}
                type="radio"
                className="m-xs-r"
                name={sortCriteria}
                checked={sortCriteria.key === priceSortCriteria}
                onChange={() =>
                  dispatch({
                    type: ACTIONS.SORT_BY_PRICE,
                    sortCriteria: sortCriteria.key,
                  })
                }
              />
              Price - {sortCriteria.label}
            </label>
          </li>
        ))}
      </ul>
    </>
  );
};
