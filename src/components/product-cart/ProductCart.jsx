import React from 'react';
import './ProductCart.scss';
import {
  ProductHorizontalCard,
  ProductCartPrice,
} from '../../shared/components';
import { useCartAsync, useWishListAsync } from '../../shared/custom-hook';

export const ProductCartList = () => {
  const { cart, setCart } = useCartAsync();
  const { wishList } = useWishListAsync();

  const wishListMapped = {};
  wishList.forEach((item) => (wishListMapped[item._id] = item));

  const removeProductFromCart = (productId) => {
    setCart(cart.filter((product) => product._id !== productId));
  };

  const updateCart = (productId, quantity) => {
    const index = cart.findIndex((product) => product._id === productId);
    const newCart = [...cart];
    newCart[index].qty = quantity;
    setCart(newCart);
  };

  return (
    <main className="m-sm-all">
      <h3 className="m-sm-all center-content">My Cart ({cart.length})</h3>

      <section className="cart-main">
        <section className="product-cart">
          {cart.map((product) => (
            <ProductHorizontalCard
              key={product._id}
              product={product}
              removeProductFromCart={removeProductFromCart}
              updateCart={updateCart}
              isInWishList={wishListMapped[product._id] ? true : false}
            ></ProductHorizontalCard>
          ))}
        </section>
        <section className="cart-price">
          {cart.length > 0 ? (
            <ProductCartPrice cart={cart}></ProductCartPrice>
          ) : null}
        </section>
      </section>
    </main>
  );
};
