import React from 'react';
import { FILTER_BY_CATEGORY } from '../../../shared/actions/types';
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
        {categories.slice(1).map((category) => (
          <li key={category._id} className="list__input m-xs-all">
            <label htmlFor={category._id} className="center-content">
              <input
                id={category._id}
                type="checkbox"
                className="m-xs-r"
                checked={categoryFilter[category.categoryName] ? true : false}
                onChange={() =>
                  dispatch({
                    type: FILTER_BY_CATEGORY,
                    categoryName: category.categoryName,
                  })
                }
              />
              {category.categoryName}
            </label>
          </li>
        ))}
      </ul>
    </>
  );
};
