import React from 'react';
import './ProductCart.scss';
import {
  ProductHorizontalCard,
  ProductCartPrice,
} from '../../shared/components';
import { useCartAsync, useWishListAsync } from '../../shared/custom-hook';
import { Link } from 'react-router-dom';

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
      {cart.length === 0 ? (
        <div className="center-content">
          <h4>Your cart is empty !</h4>
          <Link
            className="btn btn--primary-link btn--active semibold-font m-xs-l"
            to="/products"
          >
            Shop now
          </Link>
        </div>
      ) : null}

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
