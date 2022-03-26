const category1 = 'Wedding Sets';
const category2 = 'Necklace';
const category3 = 'Rings';
const category4 = 'Earrings';

export const productFilterState = {
  categoryFilter: {
    [category1]: false,
    [category2]: false,
    [category3]: false,
    [category4]: false,
  },
  ratingFilter: 0,
  priceSortCriteria: '',
  priceRangeFilter: 3000,
};
