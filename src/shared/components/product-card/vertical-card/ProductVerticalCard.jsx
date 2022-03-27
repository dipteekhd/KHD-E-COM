import React from 'react';
import './ProductVerticalCard.scss';

export const ProductVerticalCard = ({ product, actionBtnText }) => {
  const { store, price, imgUrl, categoryName, rating } = product;
  return (
    <div className="card card--vr rounded-sm">
      <div className="card__information">
        <div className="card__badge-icon center-content">
          <img className="card__media" src={imgUrl} alt="jwellary" />
          <button
            className="btn btn--default-text rounded-circle bold-font
                    card__action card__action--icon card__action--like"
          >
            <span className="material-icons">favorite_border</span>
          </button>
        </div>
        <div className=" card__primary-info text-center p-sm-all">
          <h4 className="card__title">{categoryName}</h4>
          <h4 className="card__subtitle text-grey-400">{store}</h4>
          <h3 className="card__subtitle">₹{price}</h3>
          <div className="card__rating center-content-1 rounded-sm">
            <span>{rating}</span>
            <span className="material-icons material-icons--star">star</span>
          </div>
        </div>
      </div>

      <div className="card__action-stack">
        <button
          className="btn btn--primary rounded-sm p-xs-all bold-font m-xs-all
                           card__action card__action--button"
        >
          {actionBtnText}
        </button>
      </div>
    </div>
  );
};
