import React from 'react';
import * as ACTIONS from '../../../shared/actions/types';
import { useProductFilter } from '../../../shared/context';

export const RatingFilter = () => {
  const { state, dispatch } = useProductFilter();
  const { ratingFilter } = state;
  return (
    <>
      <h4>Ratings</h4>
      <ul className="list">
        {[4, 3, 2, 1].map((ratingValue) => (
          <li key={ratingValue} className="list__input m-xs-all">
            <label htmlFor={ratingValue} className="center-content">
              <input
                id={ratingValue}
                type="radio"
                className="m-xs-r"
                name={ratingValue}
                checked={ratingFilter === ratingValue}
                onChange={() =>
                  dispatch({
                    type: ACTIONS.FILTER_BY_RATING,
                    ratingValue,
                  })
                }
              />
              {ratingValue} star & above
            </label>
          </li>
        ))}
      </ul>
    </>
  );
};
