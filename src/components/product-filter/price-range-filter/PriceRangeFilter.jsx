import React from 'react';
import './PriceRangeFilter.scss';

export const PriceRangeFilter = () => {
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
          onChange={() => {}}
        />
      </div>
    </>
  );
};
