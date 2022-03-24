import React from 'react';
import * as ACTIONS from '../../../shared/actions/types';
import { useCategory, useProductFilter } from '../../../shared/context';
import './CategoryFilter.scss';

export const CategoryFilter = () => {
  const { categories } = useCategory();
  const { state, dispatch } = useProductFilter();
  const { categoryFilter } = state;

  return (
    <>
      <h4>Category</h4>
      <ul className="list">
        {categories.slice(1).map((c) => (
          <li key={c._id} className="list__input m-xs-all">
            <label htmlFor={c._id} className="center-content">
              <input
                id={c._id}
                type="checkbox"
                className="m-xs-r"
                checked={categoryFilter[c.categoryName]}
                onChange={() =>
                  dispatch({
                    type: ACTIONS.FILTER_BY_CATEGORY,
                    categoryName: c.categoryName,
                  })
                }
              />
              {c.categoryName}
            </label>
          </li>
        ))}
      </ul>
    </>
  );
};
