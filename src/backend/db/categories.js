import { v4 as uuid } from 'uuid';
import E1 from '../../assets/images/earings/E1.jpg';
import N1 from '../../assets/images/necklace/N1.jpg';
import R1 from '../../assets/images/rings/R1.jpg';
import W1 from '../../assets/images/wedding/wed1.jpg';
import J1 from '../../assets/images/J.jpg';

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: 'All Jewellery',
    imgUrl: J1,
  },
  {
    _id: uuid(),
    categoryName: 'Wedding Sets',
    imgUrl: W1,
  },
  {
    _id: uuid(),
    categoryName: 'Necklace',
    imgUrl: N1,
  },
  {
    _id: uuid(),
    categoryName: 'Rings',
    imgUrl: R1,
  },
  {
    _id: uuid(),
    categoryName: 'Earrings',
    imgUrl: E1,
  },
];
