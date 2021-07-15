export const filterCategoriesSelector = ({ categories, filter }) => {
  const sortedFilters = filter.map((f) => categories.find((c) => c === f))
  return sortedFilters.filter((f) => f !== undefined)
};
