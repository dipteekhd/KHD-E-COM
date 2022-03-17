import React from 'react';
import './ProductList.scss';
import { ProductVerticalCard } from '../../shared/components';
import { Drawer } from '../drawer/Drawer';

export const ProductList = () => {
  return (
    <>
      <Drawer></Drawer>
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
