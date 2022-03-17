import React from 'react';

export const PriceSortFilter = () => {
  return (
    <>
      <h4>Sort by</h4>
      <ul className="list">
        <li className="list__input m-xs-all">
          <label htmlFor="price-1" className="center-content">
            <input
              id="price-1"
              type="radio"
              className="m-xs-r"
              name="I1"
              checked
              onChange={() => {}}
            />
            Price - Low to High
          </label>
        </li>
        <li className="list__input m-xs-all">
          <label htmlFor="price-2" className="center-content">
            <input
              id="price-2"
              type="radio"
              className="m-xs-r"
              name="I1"
              onChange={() => {}}
            />
            Price - High to Low
          </label>
        </li>
      </ul>
    </>
  );
};
