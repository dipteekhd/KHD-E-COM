import React, { useEffect, useState } from 'react';
import { useAlert, useAuth, useCart, useWishList } from '../../../context';
import {
  deleteProductFromWishList,
  saveProductInCart,
  saveProductInWishList,
  updateProductQuantity,
} from '../../../services/product.service';
import './ProductVerticalCard.scss';
import { useNavigate } from 'react-router-dom';
import {
  INCREMENT_WISH_COUNT,
  DECREMENT_WISH_COUNT,
  INCREMENT_CART_COUNT,
} from '../../../actions/types';

export const ProductVerticalCard = ({
  product,
  actionBtnText,
  isInWishList,
  inCart,
  removeProductFromWishList,
}) => {
  const { _id, store, price, imgUrl, categoryName, rating } = product;
  const { state: authState } = useAuth();
  const { wishListDispatch } = useWishList();
  const { cartDispatch } = useCart();
  const { setAlertMessage } = useAlert();
  const navigate = useNavigate();

  const [wishListToggle, setWishListToggle] = useState(isInWishList);
  const [productCardAction, setProductCardAction] = useState(actionBtnText);

  useEffect(() => {
    setWishListToggle(isInWishList);
  }, [isInWishList]);

  useEffect(() => {
    setProductCardAction(actionBtnText);
  }, [actionBtnText]);

  /** Adds or Removes product from wishlist when user clicks on heart button of product card */
  const onWishListAction = async () => {
    setWishListToggle(!wishListToggle);
    try {
      if (authState.isUserLoggedIn) {
        !wishListToggle ? addToWishList() : removeFromWishList(true);
      } else {
        navigate('/login');
      }
    } catch (error) {
      alert(error);
    }
  };

  /** Adds product in wishlist */
  const addToWishList = async () => {
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

  /**
   * Removes product from wishlist
   * @param {boolean} showAlertMsg - shows alert on removing product(from product/wishlist page) and
   * not on moving product to cart(from wishlist page)
   */
  const removeFromWishList = async (showAlertMsg) => {
    try {
      const data = await deleteProductFromWishList(_id);
      if (data.status === 200) {
        wishListDispatch({ type: DECREMENT_WISH_COUNT });
        if (removeProductFromWishList) removeProductFromWishList(_id); // for wishlist page only
        if (showAlertMsg) setAlertMessage('Removed from your wishlist');
      }
    } catch (error) {
      alert(error);
    }
  };

  /**
   * Adds product in cart from product page or Moves product to cart from wishlist page
   * @param {string} actionType - type can be ADD or MOVE
   * */
  const addToCart = async (actionType) => {
    try {
      if (authState.isUserLoggedIn) {
        const data = await saveProductInCart(product);
        if (data.status === 201) {
          if (actionType === 'ADD') setProductCardAction('GO TO CART');
          setAlertMessage('Added to your cart');
          cartDispatch({ type: INCREMENT_CART_COUNT });
        }
      } else {
        navigate('/login');
      }
    } catch (error) {
      alert(error);
    }
  };

  /** Increment quantity of product in cart from wish list page*/
  const updateQuantity = async () => {
    try {
      const { status } = await updateProductQuantity(_id, 'increment');
      if (status === 200) {
        setAlertMessage('Added in your cart');
      }
    } catch (error) {
      alert(error);
    }
  };

  /** Adds product in cart or increment quantity in cart from wish list page and removes product from wishlist */
  const moveToCart = () => {
    removeFromWishList(false);
    if (inCart) {
      updateQuantity();
    } else {
      addToCart('MOVE');
    }
  };

  /** Actions to be perform on vertical product card
   * @param {string} action -
   * ADD TO CART - Adds product in cart from product page,
   * MOVE TO CART - Moves product in cart from wish list page,
   * GO TO CART - Go to cart page from product page
   */
  const onCardAction = (action) => {
    if (action && action === 'ADD TO CART') {
      addToCart('ADD');
    } else if (action && action === 'MOVE TO CART') {
      moveToCart();
    } else if (action && action === 'GO TO CART') {
      navigate('/productCart');
    }
  };

  return (
    <div className="card card--vr rounded-sm">
      <div className="card__information">
        <div className="card__badge-icon center-content">
          <img className="card__media" src={imgUrl} alt="jwellary" />
          <button
            className="btn btn--default-text rounded-circle bold-font
                    card__action card__action--icon card__action--like"
            onClick={onWishListAction}
          >
            <span className="material-icons">
              {wishListToggle ? 'favorite' : 'favorite_border'}
            </span>
          </button>
        </div>
        <div className=" card__primary-info text-center p-xs-b">
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
          onClick={() => onCardAction(productCardAction)}
          className="btn btn--primary rounded-sm p-xs-all bold-font m-xs-all
                           card__action card__action--button"
        >
          {productCardAction}
        </button>
      </div>
    </div>
  );
};
