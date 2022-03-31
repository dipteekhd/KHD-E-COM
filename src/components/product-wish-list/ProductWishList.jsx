import React from 'react';
import { useWishListAsync } from '../../shared/custom-hook';
import './ProductWishList.scss';
import { ProductVerticalCard } from '../../shared/components';

export const ProductWishList = () => {
  const { wishList, setWishList } = useWishListAsync();
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
            actionBtnText="MOVE TO CART"
            removeProductFromWishList={removeProductFromWishList}
          ></ProductVerticalCard>
        ))}
      </section>
    </main>
  );
};
