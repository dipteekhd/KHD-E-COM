import React from 'react';
import { useWishListAsync, useCartAsync } from '../../shared/custom-hook';
import './ProductWishList.scss';
import { ProductVerticalCard } from '../../shared/components';

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
