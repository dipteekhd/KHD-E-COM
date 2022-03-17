import React from 'react';

export const RatingFilter = () => {
  return (
    <>
      <h4>Ratings</h4>
      <ul className="list">
        <li className="list__input m-xs-all">
          <label htmlFor="star-4" className="center-content">
            <input
              id="star-4"
              type="radio"
              className="m-xs-r"
              name="I1"
              checked
              onChange={() => {}}
            />
            4 star & above
          </label>
        </li>
        <li className="list__input m-xs-all">
          <label htmlFor="star-3" className="center-content">
            <input
              id="star-3"
              type="radio"
              className="m-xs-r"
              name="I1"
              onChange={() => {}}
            />
            3 star & above
          </label>
        </li>
        <li className="list__input m-xs-all">
          <label htmlFor="star-2" className="center-content">
            <input
              id="star-2"
              type="radio"
              className="m-xs-r"
              name="I1"
              onChange={() => {}}
            />
            2 star & above
          </label>
        </li>
        <li className="list__input m-xs-all">
          <label htmlFor="star-1" className="center-content">
            <input
              id="star-1"
              type="radio"
              className="m-xs-r"
              name="I1"
              onChange={() => {}}
            />
            1 star & above
          </label>
        </li>
      </ul>
    </>
  );
};
