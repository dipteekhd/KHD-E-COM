import React from 'react';
import './ProductHorizontalCard.scss';

export const ProductHorizontalCard = () => {
  return (
    <>
      <div className="card card--hr rounded-sm shadow">
        <div className="card__media-container">
          <img
            className="card__media"
            src="https://e-commerce-khd.netlify.app/assets/images/products/Jwellary.jpg"
            alt="poster"
          />
        </div>
        <div className="card__info-action m-sm-all">
          <div className="card__information p-sm-all">
            <div className="card__primary-info">
              <h4 className="card__title">Blue Earrings</h4>
              <h4 className="card__subtitle text-grey-500 m-sm-b">
                Kalyan Jewellers
              </h4>
              <div className="card__price">
                <h3>₹3000</h3>
                <p className="card__price-old text-grey-500">₹4000</p>
              </div>
              <h4 className="card__offer bold-font text-grey-500 m-xs-t">
                50% off
              </h4>
            </div>
            <div className="card__secondary-info text-grey-500 m-xs-t">
              <h4>Quantity</h4>
              <button className="btn btn--primary-outline btn--quantity rounded-circle bold-font">
                +
              </button>
              <div className="card__quantity p-xs-hr">1</div>
              <button className="btn btn--primary-outline btn--quantity rounded-circle bold-font">
                -
              </button>
            </div>
          </div>
          <div className="card__action-stack p-xs-all m-xs-t">
            <button
              className="btn btn--primary p-xs-all m-xs-vr bold-font rounded-sm
                                   card__action card__action--button"
            >
              REMOVE FROM CART
            </button>
            <button
              className="btn btn--default p-xs-all m-xs-vr bold-font rounded-sm
                        card__action card__action--button"
            >
              MOVE TO WISHLIST
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
