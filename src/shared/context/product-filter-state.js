const c1 = 'Wedding Sets';
const c2 = 'Necklace';
const c3 = 'Rings';
const c4 = 'Earrings';

export const productFilterState = {
  categoryFilter: {
    [c1]: false,
    [c2]: false,
    [c3]: false,
    [c4]: false,
  },
  ratingFilter: 0,
  priceSortCriteria: '',
  priceRangeFilter: 3000,
};
