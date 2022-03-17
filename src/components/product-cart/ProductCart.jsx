import React from 'react';
import './ProductCart.scss';
import {
  ProductHorizontalCard,
  ProductCartPrice,
} from '../../shared/components';

export const ProductCartList = () => {
  return (
    <main className="m-sm-all">
      <h3 className="m-sm-all center-content">My Cart (2)</h3>
      <section className="cart-main">
        <section className="product-cart">
          {[1, 2, 3].map((productCart) => (
            <ProductHorizontalCard
              key={productCart}
              {...productCart}
            ></ProductHorizontalCard>
          ))}
        </section>
        <section className="cart-price">
          <ProductCartPrice></ProductCartPrice>
        </section>
      </section>
    </main>
  );
};
