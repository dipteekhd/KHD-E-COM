import React from 'react';
import './Home.scss';
import { ProductBasicCard } from '../../shared/components';
import { useCategory } from '../../shared/context';

export const Home = () => {
  const { categories } = useCategory();
  return (
    <main className="home m-sm-all center-content">
      <h2 className="m-sm-all home__title">Gorgeous Jewellery</h2>
      <section className="category center-content">
        {categories.map((category) => (
          <ProductBasicCard
            key={category._id}
            category={category}
          ></ProductBasicCard>
        ))}
      </section>
    </main>
  );
};
