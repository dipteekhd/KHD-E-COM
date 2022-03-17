import React from 'react';
import './ProductFilterDrawer.scss';
import {
  CategoryFilter,
  RatingFilter,
  PriceSortFilter,
  PriceRangeFilter,
} from '../../product-filter';

export const ProductFilterDrawer = () => {
  return (
    <>
      <aside className="drawer drawer--permanent">
        <nav>
          <section className="filter m-xs-all">
            <h4>Filters</h4>
            <button className="btn btn--default-text btn--clear p-xs-vr p-sm-hr rounded-sm bold-font">
              CLEAR
            </button>
          </section>
          <section className="m-xs-all text-grey-500">
            <PriceRangeFilter></PriceRangeFilter>
          </section>
          <section className="category m-xs-all text-grey-500">
            <CategoryFilter></CategoryFilter>
          </section>
          <section className="rating m-xs-all text-grey-500">
            <RatingFilter></RatingFilter>
          </section>
          <section className="sortBy m-xs-all text-grey-500">
            <PriceSortFilter></PriceSortFilter>
          </section>
        </nav>
      </aside>
    </>
  );
};
