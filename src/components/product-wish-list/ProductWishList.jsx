import React from 'react';
import './ProductWishList.scss';
import { ProductVerticalCard } from '../../shared/components';

export const ProductWishList = () => {
  return (
    <main className="m-sm-all">
      <h3 className="m-sm-all center-content">My Wishlist (2)</h3>
      <section className="wish-list center-content">
        {[1, 2, 3].map((product) => (
          <ProductVerticalCard
            key={product}
            {...product}
            actionBtnText="MOVE TO CART"
          ></ProductVerticalCard>
        ))}
      </section>
    </main>
  );
};
