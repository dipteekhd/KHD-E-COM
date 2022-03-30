import React, { useEffect } from 'react';
import { useAlert, useAuth, useWishList } from '../../../context';
import {
  deleteProductFromWishList,
  saveProductInWishList,
} from '../../../services/product.service';
import './ProductVerticalCard.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import {
  INCREMENT_WISH_COUNT,
  DECREMENT_WISH_COUNT,
} from '../../../actions/types';

export const ProductVerticalCard = ({
  product,
  actionBtnText,
  isInWishList,
  removeProductFromWishList,
}) => {
  const { _id, store, price, imgUrl, categoryName, rating } = product;
  const { state: authState } = useAuth();
  const { wishListDispatch } = useWishList();
  const { setAlertMessage } = useAlert();

  const [wishListToggle, setWishListToggle] = useState(isInWishList);

  useEffect(() => {
    setWishListToggle(isInWishList);
  }, [isInWishList]);

  const navigate = useNavigate();

  const addRemoveWishList = async () => {
    setWishListToggle(!wishListToggle);
    try {
      if (authState.isUserLoggedIn) {
        const data = !wishListToggle
          ? await saveProductInWishList(product)
          : await deleteProductFromWishList(_id);

        if (data.status === 201 && !wishListToggle) {
          wishListDispatch({ type: INCREMENT_WISH_COUNT });
          setAlertMessage('Added to wishlist');
        }

        if (data.status === 200 && wishListToggle) {
          wishListDispatch({ type: DECREMENT_WISH_COUNT });
          if (removeProductFromWishList) removeProductFromWishList(_id); // for wishlist page only
          setAlertMessage('Removed from wish list');
        }
      } else {
        navigate('/login');
      }
    } catch (error) {
      alert(error);
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
            onClick={addRemoveWishList}
          >
            <span className="material-icons">
              {wishListToggle ? 'favorite' : 'favorite_border'}
            </span>
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
