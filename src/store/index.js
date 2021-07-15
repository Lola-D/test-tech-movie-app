import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import { categoriesReducer } from './categoriesReducer';
import { filterReducer } from './filterReducer';
import { moviesReducer } from './moviesReducer';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(
  combineReducers({
    movies: moviesReducer,
    categories: categoriesReducer,
    filter: filterReducer,
  }),
  composedEnhancer
);

export default store;
