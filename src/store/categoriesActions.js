export const getCategoriesAction = (categories) => {
  return {
    type: 'GET_CATEGORIES',
    payload: categories
  };
};
