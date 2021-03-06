import { v4 as uuid } from 'uuid';
import { E1, N1, R1, W1, J1 } from '../../assets';
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
