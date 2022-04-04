import React from 'react';
import { useAlert, useCart, useWishList } from '../../../context';
import {
  deleteProductFromCart,
  saveProductInWishList,
  updateProductQuantity,
} from '../../../services/product.service';
import './ProductHorizontalCard.scss';
import { DECREMENT_CART_COUNT } from '../../../actions/types';
import { INCREMENT_WISH_COUNT } from '../../../actions/types';
import { useNavigate } from 'react-router-dom';

export const ProductHorizontalCard = ({
  product,
  removeProductFromCart,
  updateCart,
  isInWishList,
}) => {
  const { _id, store, price, imgUrl, discount, categoryName, qty } = product;
  const discountPrice = price * (Number(discount) / 100);
  const newPrice = price - discountPrice;

  const { setAlertMessage } = useAlert();
  const { cartDispatch } = useCart();
  const { wishListDispatch } = useWishList();
  const navigate = useNavigate();

  /**
   * Removes product from cart
   * @param {boolean} showAlertMsg - shows alert on removing product(from cart page) and
   * not on moving product to wishlist(from cart page)
   */
  const removeFromCart = async (showAlertMsg) => {
    try {
      const { status } = await deleteProductFromCart(_id);
      if (status === 200) {
        removeProductFromCart(_id);
        cartDispatch({ type: DECREMENT_CART_COUNT });
        if (showAlertMsg) setAlertMessage('Removed from you cart');
      }
    } catch (error) {
      alert(error);
    }
  };

  /** Increment/Decrement quantity of product in cart from cart page
   * @param {number} quantity - quantity of product in cart
   * @param {string} actionType - increment/decrement quantity
   */
  const updateQuantity = async (quantity, actionType) => {
    try {
      const { status } = await updateProductQuantity(_id, actionType);
      if (status === 200) {
        updateCart(_id, quantity);
      }
    } catch (error) {
      alert(error);
    }
  };

  const onWishListAction = () => {
    isInWishList ? navigate('/ProductWishList') : moveToWishList();
  };

  const moveToWishList = async () => {
    removeFromCart(false);
    try {
      const data = await saveProductInWishList(product);
      if (data.status === 201) {
        wishListDispatch({ type: INCREMENT_WISH_COUNT });
        setAlertMessage('Added to your wishlist');
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <div className="card card--hr rounded-sm shadow">
        <div className="card__media-container">
          <img className="card__media" src={imgUrl} alt="poster" />
        </div>
        <div className="card__info-action m-sm-all">
          <div className="card__information p-sm-all">
            <div className="card__primary-info">
              <h4 className="card__title">{categoryName}</h4>
              <h4 className="card__subtitle text-grey-500 m-sm-b">{store}</h4>
              <div className="card__price">
                <h3>₹{newPrice}</h3>
                <p className="card__price-old text-grey-500">{price}</p>
              </div>
              <h4 className="card__offer bold-font text-grey-500 m-xs-t">
                {discount}% off
              </h4>
            </div>
            <div className="card__secondary-info text-grey-500 m-xs-t">
              <h4>Quantity</h4>
              <button
                onClick={() => updateQuantity(qty + 1, 'increment')}
                className="btn btn--primary-outline btn--quantity rounded-circle bold-font"
              >
                +
              </button>
              <div className="card__quantity p-xs-hr">{qty}</div>
              <button
                onClick={() => {
                  if (qty - 1 > 0) updateQuantity(qty - 1, 'decrement');
                }}
                className="btn btn--primary-outline btn--quantity rounded-circle bold-font"
              >
                -
              </button>
            </div>
          </div>
          <div className="card__action-stack p-xs-all m-xs-t">
            <button
              onClick={() => removeFromCart(true)}
              className="btn btn--primary p-xs-all m-xs-vr bold-font rounded-sm
                                   card__action card__action--button"
            >
              REMOVE FROM CART
            </button>
            <button
              onClick={onWishListAction}
              className="btn btn--default p-xs-all m-xs-vr bold-font rounded-sm
                        card__action card__action--button"
            >
              {isInWishList ? 'GO TO WISHLIST' : ' MOVE TO WISHLIST'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
