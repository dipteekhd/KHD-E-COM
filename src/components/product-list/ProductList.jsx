import React from 'react';
import './ProductList.scss';
import { ProductVerticalCard } from '../../shared/components';
import { ProductFilterDrawer } from '../../components';
export const ProductList = () => {
  return (
    <>
      <ProductFilterDrawer></ProductFilterDrawer>
      <main className="products center-content p-sm-all">
        <h4 className="m-sm-b">Showing 1 – 6 of 10 results</h4>
        <section className="product-list center-content">
          {[1, 2, 3, 4, 5, 6].map((product) => (
            <ProductVerticalCard
              key={product}
              {...product}
              actionBtnText="ADD TO CART"
            ></ProductVerticalCard>
          ))}
        </section>
      </main>
    </>
  );
};
