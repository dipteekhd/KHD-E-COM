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

  const sortedProducts = getSortedProducts(products, priceSortCriteria);
  const filteredProducts = getFilteredProducts(
    sortedProducts,
    categoryFilter,
    ratingFilter,
    priceRangeFilter
  );

  return (
    <>
      <ProductFilterDrawer></ProductFilterDrawer>
      <main className="products center-content p-sm-all">
        {filteredProducts.length === 0
          ? 'No products found for applied filters.Please change the filter to get products!'
          : null}
        {!loader ? (
          <h4 className="m-sm-b">
            Showing {filteredProducts.length}/ {products.length}
            results
          </h4>
        ) : null}
        {loader ? (
          <div className="alert alert--info  p-sm-all rounded-sm" role="alert">
            <p className="text-sm">Loading...</p>
          </div>
        ) : null}
        <section className="product-list center-content">
          {filteredProducts.map((product) => (
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
