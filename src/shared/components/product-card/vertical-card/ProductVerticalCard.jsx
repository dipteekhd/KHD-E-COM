import React from 'react';
import './ProductVerticalCard.scss';

export const ProductVerticalCard = ({ actionBtnText }) => {
  return (
    <div className="card card--vr rounded-sm">
      <div className="card__information">
        <div className="card__badge-icon center-content">
          <img
            className="card__media"
            src="https://e-commerce-khd.netlify.app/assets/images/products/Jwellary.jpg"
            alt="jwellary"
          />
          <button
            className="btn btn--default-text rounded-circle bold-font
                    card__action card__action--icon card__action--like"
          >
            <span className="material-icons">favorite_border</span>
          </button>
        </div>
        <div className=" card__primary-info text-center p-sm-all">
          <h4 className="card__title text-grey-400">Amrapali Jewels</h4>
          <h3 className="card__subtitle">₹3000</h3>
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
