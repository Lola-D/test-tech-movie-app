export const moviesSelector = ({ movies }) => movies;

export const filteredMoviesSelector = ({ movies, filter }) => {
  if (filter.length === 0) {
    return movies;
  };
  return filter.flatMap((f) => {
    return movies.filter((movie) => movie.category === f);
  });
};
