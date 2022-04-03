import React from 'react';
import { useWishListAsync, useCartAsync } from '../../shared/custom-hook';
import './ProductWishList.scss';
import { ProductVerticalCard } from '../../shared/components';
import { Link } from 'react-router-dom';

export const ProductWishList = () => {
  const { wishList, setWishList } = useWishListAsync();
  const { cart } = useCartAsync();

  const cartMapped = {};
  cart.forEach((item) => (cartMapped[item._id] = item));

  const removeProductFromWishList = (productId) => {
    setWishList(wishList.filter((product) => product._id !== productId));
  };
  return (
    <main className="m-sm-all">
      <h3 className="m-sm-all center-content">
        My Wishlist ({wishList.length})
      </h3>
      {wishList.length === 0 ? (
        <div className="center-content">
          <h4>Your wish list is empty !</h4>
          <Link
            className="btn btn--primary-link btn--active semibold-font m-xs-l"
            to="/products"
          >
            Shop now
          </Link>
        </div>
      ) : null}
      <section className="wish-list center-content">
        {wishList.map((product) => (
          <ProductVerticalCard
            key={product._id}
            product={product}
            isInWishList={true}
            inCart={cartMapped[product._id] ? true : false}
            actionBtnText={'MOVE TO CART'}
            removeProductFromWishList={removeProductFromWishList}
          ></ProductVerticalCard>
        ))}
      </section>
    </main>
  );
};
