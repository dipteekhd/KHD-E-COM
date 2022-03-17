import React from 'react';
import './CategoryFilter.scss';

export const CategoryFilter = () => {
  return (
    <>
      <h4>Category</h4>
      <ul className="list">
        <li className="list__input m-xs-all">
          <label htmlFor="category-1" className="center-content">
            <input
              id="category-1"
              type="checkbox"
              className="m-xs-r"
              checked
              onChange={() => {}}
            />
            Indian Jwellary
          </label>
        </li>
        <li className="list__input m-xs-all">
          <label htmlFor="category-2" className="center-content">
            <input
              id="category-2"
              type="checkbox"
              className="m-xs-r"
              onChange={() => {}}
            />
            Earrings
          </label>
        </li>
        <li className="list__input m-xs-all">
          <label htmlFor="category-3" className="center-content">
            <input
              id="category-3"
              type="checkbox"
              className="m-xs-r"
              onChange={() => {}}
            />
            Gold
          </label>
        </li>
        <li className="list__input m-xs-all">
          <label htmlFor="category-4" className="center-content">
            <input
              id="category-4"
              type="checkbox"
              className="m-xs-r"
              onChange={() => {}}
            />
            Diamond
          </label>
        </li>
        <li className="list__input m-xs-all">
          <label htmlFor="category-5" className="center-content">
            <input
              id="category-5"
              type="checkbox"
              className="m-xs-r"
              onChange={() => {}}
            />
            Rings
          </label>
        </li>
      </ul>
    </>
  );
};
