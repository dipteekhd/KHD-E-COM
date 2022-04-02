import './ProductCartPrice.scss';
import React from 'react';

export const ProductCartPrice = ({ cart }) => {
  const { price, discount } = calculateTotalPrice(cart);
  const deliveryCharge = 50;

  return (
    <div className="card rounded-sm shadow">
      <div className="card__info-action m-sm-all">
        <div className="card__information p-sm-all">
          <h4 className="card__title p-xs-b">PRICE DETAILS</h4>
          <hr />
          <div className="card__amount p-xs-vr">
            <p>Price({cart.length} items)</p>
            <p>₹{price}</p>
          </div>
          <div className="card__amount p-xs-b">
            <p>Discount</p>
            <p>-₹{discount}</p>
          </div>
          <div className="card__amount p-xs-b">
            <p>Delivery Charges</p>
            <p>₹50</p>
          </div>
          <hr />
          <div className="card__amount p-xs-vr">
            <h4>TOTAL AMOUNT</h4>
            <p>₹{price - discount + deliveryCharge}</p>
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

const calculateTotalPrice = (cart) => {
  const initialCost = {
    price: 0,
    discount: 0,
  };
  const totalCost = cart.reduce((acc, curr) => {
    const discount = curr.price * (Number(curr.discount) / 100);
    acc.price += curr.price * curr.qty;
    acc.discount += discount * curr.qty;
    return acc;
  }, initialCost);
  return totalCost;
};
