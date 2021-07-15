const FETCH_MOVIES = 'FETCH_MOVIES';
const REMOVE_MOVIE = 'REMOVE_MOVIE';
const LIKE_MOVIE = 'LIKE_MOVIE';
const DISLIKE_MOVIE = 'DISLIKE_MOVIE';

export const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_MOVIES: {
      const newState = action.payload;
      return newState;
    }
    case REMOVE_MOVIE: {
      return state.filter((movie) => movie !== action.payload);
    }
    case LIKE_MOVIE: {
      return state.map((movie) => {
        if (movie.id === action.payload.id) {
          return { ...movie, ...action.payload };
        } else {
          return movie;
        }
      })
    }
    case DISLIKE_MOVIE: {
      return state.map((movie) => {
        if (movie.id === action.payload.id) {
          return { ...movie, ...action.payload };
        } else {
          return movie;
        }
      })
    }
    default:
      return state;
  };
};
