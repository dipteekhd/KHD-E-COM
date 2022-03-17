import './ProductCartPrice.scss';
import React from 'react';
export const ProductCartPrice = () => {
  return (
    <div className="card rounded-sm shadow">
      <div className="card__info-action m-sm-all">
        <div className="card__information p-sm-all">
          <h4 className="card__title p-xs-b">PRICE DETAILS</h4>
          <hr />
          <div className="card__amount p-xs-vr">
            <p>Price(2 items)</p>
            <p>₹3000</p>
          </div>
          <div className="card__amount p-xs-b">
            <p>Discount</p>
            <p>-₹500</p>
          </div>
          <div className="card__amount p-xs-b">
            <p>Delivery Charges</p>
            <p>₹50</p>
          </div>
          <hr />
          <div className="card__amount p-xs-vr">
            <h4>TOTAL AMOUNT</h4>
            <p>₹50</p>
          </div>
          <p>You will save ₹500 on this order</p>
        </div>
        <div className="card__action-stack p-xs-all">
          <button
            className="btn btn--default p-xs-all m-xs-vr bold-font rounded-sm
                       card__action card__action--button"
          >
            PLACE ORDER
          </button>
        </div>
      </div>
    </div>
  );
};
