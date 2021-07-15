const UPDATE_FILTER_CATEGORIES = 'UPDATE_FILTER_CATEGORIES';

export const filterReducer = (state = [], action) => {
  switch (action.type) {
    case UPDATE_FILTER_CATEGORIES:
      if (state.includes(action.payload)) {
        return state.filter((category) => category !== action.payload);
      } else {
        return [...state, action.payload];
      }
    default:
      return state;
  };
};
