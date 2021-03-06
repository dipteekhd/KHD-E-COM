import React from 'react';
import './ProductList.scss';
import { Loader, ProductVerticalCard } from '../../shared/components';
import { ProductFilterDrawer } from '../../components';
import { useProductAsync } from './useProductAsync';
import {
  getFilteredProducts,
  getSortedProducts,
} from '../../shared/product.util';
import { useProductFilter } from '../../shared/context';
import { useCartAsync, useWishListAsync } from '../../shared/custom-hook';

export const ProductList = () => {
  const { products, loader } = useProductAsync();
  const { wishList } = useWishListAsync();
  const { cart } = useCartAsync();

  const wishListMapped = {};
  wishList.forEach((item) => (wishListMapped[item._id] = item));

  const cartMapped = {};
  cart.forEach((item) => (cartMapped[item._id] = item));

  const { state: productFilterState } = useProductFilter();
  const { categoryFilter, ratingFilter, priceSortCriteria, priceRangeFilter } =
    productFilterState;

  const filteredProducts = getFilteredProducts(
    products,
    categoryFilter,
    ratingFilter,
    priceRangeFilter
  );
  const sortedProducts = getSortedProducts(filteredProducts, priceSortCriteria);

  return (
    <>
      <ProductFilterDrawer></ProductFilterDrawer>
      <main className="products center-content p-sm-all">
        {!loader && sortedProducts.length === 0
          ? 'No products found for applied filters.Please change the filter to get products!'
          : null}
        {!loader ? (
          <h4 className="m-sm-b">
            Showing {sortedProducts.length}/ {products.length}
            results
          </h4>
        ) : null}
        {loader ? <Loader></Loader> : null}
        <section className="product-list center-content">
          {sortedProducts.map((product) => (
            <ProductVerticalCard
              key={product._id}
              product={product}
              isInWishList={wishListMapped[product._id] ? true : false}
              actionBtnText={
                cartMapped[product._id] ? 'GO TO CART' : 'ADD TO CART'
              }
            ></ProductVerticalCard>
          ))}
        </section>
      </main>
    </>
  );
};
