import React from 'react';
import './Home.scss';
import { ProductBasicCard } from '../../shared/components';

export const Home = () => {
  return (
    <main className="home m-sm-all center-content">
      <h2 className="m-sm-all home__title">Gorgeous Jewellery</h2>
      <section className="category center-content">
        {['Indian Jwellary', 'Gold'].map((c) => (
          <ProductBasicCard key={c} category={c}></ProductBasicCard>
        ))}
      </section>
    </main>
  );
};
