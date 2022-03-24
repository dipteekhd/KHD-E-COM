export const getSortedProducts = (products = [], priceSortCriteria) => {
  const sortedList = [...products];
  if (priceSortCriteria && priceSortCriteria === 'lowToHighPrice') {
    sortedList.sort((a, b) => a.price - b.price);
  } else if (priceSortCriteria && priceSortCriteria === 'highToLowPrice') {
    sortedList.sort((a, b) => b.price - a.price);
  }
  return sortedList;
};

export const getFilteredProducts = (
  products = [],
  categoryFilter,
  ratingFilter,
  priceRangeFilter
) => {
  const appliedCategoryFilter = Object.keys(categoryFilter).filter(
    (categoryName) => categoryFilter[categoryName]
  );

  let filteredProducts = [];
  appliedCategoryFilter.forEach((filter) => {
    const result = products.filter((prod) => prod.categoryName === filter);
    filteredProducts = [...filteredProducts, ...result];
  });

  if (appliedCategoryFilter.length === 0) {
    filteredProducts = [...products];
  }
  filteredProducts = filteredProducts
    .filter((prod) =>
      ratingFilter > 0 ? prod.rating > Number(ratingFilter) : true
    )
    .filter((prod) =>
      priceRangeFilter ? prod.price <= Number(priceRangeFilter) : true
    );

  return filteredProducts;
};
