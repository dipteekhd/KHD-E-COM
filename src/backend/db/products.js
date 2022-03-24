import { v4 as uuid } from 'uuid';
import E1 from '../../assets/images/earings/E1.jpg';
import E2 from '../../assets/images/earings/E2.jpg';
import E3 from '../../assets/images/earings/E3.jpg';
import E4 from '../../assets/images/earings/E4.jpg';

import N1 from '../../assets/images/necklace/N1.jpg';
import N2 from '../../assets/images/necklace/N2.jpg';
import N3 from '../../assets/images/necklace/N3.jpg';
import N4 from '../../assets/images/necklace/N4.jpg';
import N5 from '../../assets/images/necklace/N5.jpg';
import N6 from '../../assets/images/necklace/N6.jpg';
import N7 from '../../assets/images/necklace/N7.jpg';
import N8 from '../../assets/images/necklace/N8.jpg';

import R1 from '../../assets/images/rings/R1.jpg';
import R2 from '../../assets/images/rings/R2.jpg';
import R3 from '../../assets/images/rings/R3.jpg';
import R4 from '../../assets/images/rings/R4.jpg';
import R5 from '../../assets/images/rings/R5.jpg';
import R6 from '../../assets/images/rings/R6.jpg';
import R7 from '../../assets/images/rings/R7.jpg';
import R8 from '../../assets/images/rings/R8.jpg';
import R9 from '../../assets/images/rings/R9.jpg';

import W1 from '../../assets/images/wedding/wed1.jpg';
import W2 from '../../assets/images/wedding/wed2.jpg';
import W3 from '../../assets/images/wedding/wed3.jpg';
import W4 from '../../assets/images/wedding/wed4.jpg';
import W5 from '../../assets/images/wedding/wed5.jpg';
import W6 from '../../assets/images/wedding/wed6.jpg';

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    store: 'Kalyan Jewellers',
    price: 2200,
    discount: '50%',
    categoryName: 'Wedding Sets',
    rating: 4.5,
    imgUrl: W1,
  },
  {
    _id: uuid(),
    store: 'Kalyan Jewellers',
    price: 2300,
    discount: '50%',
    categoryName: 'Wedding Sets',
    rating: 4,
    imgUrl: W2,
  },
  {
    _id: uuid(),
    store: 'Kalyan Jewellers',
    price: 2100,
    discount: '50%',
    categoryName: 'Wedding Sets',
    rating: 3,
    imgUrl: W3,
  },
  {
    _id: uuid(),
    store: 'Tanishq Jewellers',
    price: 2500,
    discount: '40%',
    categoryName: 'Wedding Sets',
    rating: 4,
    imgUrl: W4,
  },
  {
    _id: uuid(),
    store: 'Chandukaka Saraf Jewellers',
    price: 1500,
    discount: '30%',
    categoryName: 'Wedding Sets',
    rating: 4,
    imgUrl: W5,
  },
  {
    _id: uuid(),
    store: 'Chandukaka Saraf Jewellers',
    price: 2500,
    discount: '50%',
    categoryName: 'Wedding Sets',
    rating: 3.5,
    imgUrl: W6,
  },
  {
    _id: uuid(),
    store: 'Chandukaka Saraf Jewellers',
    price: 1000,
    discount: '50%',
    categoryName: 'Necklace',
    rating: 3,
    imgUrl: N1,
  },
  {
    _id: uuid(),
    store: 'Chandukaka Saraf Jewellers',
    price: 2500,
    discount: '50%',
    categoryName: 'Necklace',
    rating: 2.5,
    imgUrl: N2,
  },
  {
    _id: uuid(),
    store: 'Tanishq Jewellers',
    price: 1800,
    discount: '50%',
    categoryName: 'Necklace',
    rating: 3,
    imgUrl: N3,
  },
  {
    _id: uuid(),
    store: 'Tanishq Jewellers',
    price: 1200,
    discount: '50%',
    categoryName: 'Necklace',
    rating: 5,
    imgUrl: N4,
  },
  {
    _id: uuid(),
    store: 'Tanishq Jewellers',
    price: 1900,
    discount: '50%',
    categoryName: 'Necklace',
    rating: 3.5,
    imgUrl: N5,
  },
  {
    _id: uuid(),
    store: 'Tanishq Jewellers',
    price: 2400,
    discount: '50%',
    categoryName: 'Necklace',
    rating: 2,
    imgUrl: N6,
  },
  {
    _id: uuid(),
    store: 'Kalyan Jewellers',
    price: 2300,
    discount: '50%',
    categoryName: 'Necklace',
    rating: 3.5,
    imgUrl: N7,
  },
  {
    _id: uuid(),
    store: 'Kalyan Jewellers',
    price: 2200,
    discount: '50%',
    categoryName: 'Necklace',
    rating: 4,
    imgUrl: N8,
  },

  {
    _id: uuid(),
    store: 'Kalyan Jewellers',
    price: 1100,
    discount: '50%',
    categoryName: 'Rings',
    rating: 5,
    imgUrl: R1,
  },
  {
    _id: uuid(),
    store: 'Kalyan Jewellers',
    price: 1400,
    discount: '50%',
    categoryName: 'Rings',
    rating: 5,
    imgUrl: R2,
  },
  {
    _id: uuid(),
    store: 'Kalyan Jewellers',
    price: 1450,
    discount: '50%',
    categoryName: 'Rings',
    rating: 5,
    imgUrl: R3,
  },
  {
    _id: uuid(),
    store: 'Tanishq Jewellers',
    price: 1400,
    discount: '50%',
    categoryName: 'Rings',
    rating: 4,
    imgUrl: R4,
  },
  {
    _id: uuid(),
    store: 'Tanishq Jewellers',
    price: 1200,
    discount: '50%',
    categoryName: 'Rings',
    rating: 4,
    imgUrl: R5,
  },
  {
    _id: uuid(),
    store: 'Tanishq Jewellers',
    price: 1100,
    discount: '50%',
    categoryName: 'Rings',
    rating: 4,
    imgUrl: R6,
  },
  {
    _id: uuid(),
    store: 'Chandukaka Saraf Jewellers',
    price: 1150,
    discount: '50%',
    categoryName: 'Rings',
    rating: 5,
    imgUrl: R7,
  },
  {
    _id: uuid(),
    store: 'Chandukaka Saraf Jewellers',
    price: 2220,
    discount: '50%',
    categoryName: 'Rings',
    rating: 5,
    imgUrl: R8,
  },
  {
    _id: uuid(),
    store: 'Chandukaka Saraf Jewellers',
    price: 1500,
    discount: '50%',
    categoryName: 'Rings',
    rating: 4,
    imgUrl: R9,
  },
  {
    _id: uuid(),
    store: 'Kalyan Jewellers',
    price: 1440,
    discount: '50%',
    categoryName: 'Earrings',
    rating: 4,
    imgUrl: E1,
  },
  {
    _id: uuid(),
    store: 'Tanishq Jewellers',
    price: 1000,
    discount: '70%',
    categoryName: 'Earrings',
    rating: 3,
    imgUrl: E2,
  },
  {
    _id: uuid(),
    store: 'Chandukaka Saraf Jewellers',
    price: 3000,
    discount: '20%',
    categoryName: 'Earrings',
    rating: 5,
    imgUrl: E3,
  },
  {
    _id: uuid(),
    store: 'Kalyan Jewellers',
    price: 3000,
    discount: '20%',
    categoryName: 'Earrings',
    rating: 3.5,
    imgUrl: E4,
  },
];
