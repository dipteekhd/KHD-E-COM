import React from 'react';
import './ProductList.scss';
import { ProductVerticalCard } from '../../shared/components';
import { ProductFilterDrawer } from '../../components';
import { useProductAsync } from './useProductAsync';
import {
  getFilteredProducts,
  getSortedProducts,
} from '../../shared/product.util';
import { useProductFilter } from '../../shared/context';

export const ProductList = () => {
  const { products, loader } = useProductAsync();
  const { state } = useProductFilter();
  const { categoryFilter, ratingFilter, priceSortCriteria, priceRangeFilter } =
    state;

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
        {loader ? (
          <div className="alert alert--info  p-sm-all rounded-sm" role="alert">
            <p className="text-sm">Loading...</p>
          </div>
        ) : null}
        <section className="product-list center-content">
          {sortedProducts.map((product) => (
            <ProductVerticalCard
              key={product._id}
              product={product}
              actionBtnText="ADD TO CART"
            ></ProductVerticalCard>
          ))}
        </section>
      </main>
    </>
  );
};
