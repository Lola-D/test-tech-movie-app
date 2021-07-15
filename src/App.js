import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { moviesSelector } from './store/moviesSelectors';
import { getCategoriesAction } from './store/categoriesActions';
import Header from './components/Header';
import Pagination from './components/Pagination';

const App = () => {
  const movies = useSelector(moviesSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (movies !== null) {
      let cat = [];
      movies.map((movie) => cat.push(movie.category));
      dispatch(getCategoriesAction([...new Set(cat)]))
    }
  }, [movies, dispatch]);

  if (movies === null) return <p>loading</p>;

  return (
    <>
      <Header />
      <Pagination />
    </>
  );
};

export default App;
