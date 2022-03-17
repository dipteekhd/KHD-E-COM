import './ProductBasicCard.scss';
import React from 'react';

export const ProductBasicCard = ({ category }) => {
  return (
    <div className="card card--basic rounded-sm">
      <div className="card__information">
        <div>
          <img
            className="card__media card__media--tall"
            src="https://e-commerce-khd.netlify.app/assets/images/products/Jwellary.jpg"
            alt="poster"
          />
        </div>
      </div>
      <div className="card__action-stack">
        <a
          className="btn btn--primary-outline rounded-sm p-xs-all bold-font m-xs-all
                     card__action card__action--button"
          href="/screens/product-list/product-list.html"
        >
          {category}
        </a>
      </div>
    </div>
  );
};
