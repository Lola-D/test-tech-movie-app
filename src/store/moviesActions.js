import { movies$ } from '../utils/movies';

export async function fetchMovies(dispatch, getState) {
  const response = await movies$;
  dispatch({
    type: 'FETCH_MOVIES',
    payload: response
  });
};

export const removeMovieAction = (movie) => {
  return {
    type: 'REMOVE_MOVIE',
    payload: movie
  };
};

export const likeMovieAction = (movie) => {
  if (movie.isDisliked) {
    return {
      type: 'LIKE_MOVIE',
      payload: {
        ...movie,
        likes: movie.likes + 1,
        isLiked: true,
        dislikes: movie.dislikes - 1,
        isDisliked: false
      }
    };
  };
  if (!movie.isLiked) {
    return {
      type: 'LIKE_MOVIE',
      payload: { ...movie, likes: movie.likes + 1, isLiked: true }
    };
  };
  if (movie.isLiked) {
    return {
      type: 'LIKE_MOVIE',
      payload: { ...movie, likes: movie.likes - 1, isLiked: false }
    };
  };
};

export const dislikeMovieAction = (movie) => {
  if (movie.isLiked) {
    return {
      type: 'DISLIKE_MOVIE',
      payload: {
        ...movie,
        likes: movie.likes - 1,
        isLiked: false,
        dislikes: movie.dislikes + 1,
        isDisliked: true
      }
    };
  };
  if (!movie.isDisliked) {
    return {
      type: 'DISLIKE_MOVIE',
      payload: { ...movie, dislikes: movie.dislikes + 1, isDisliked: true }
    };
  };
  if (movie.isDisliked) {
    return {
      type: 'DISLIKE_MOVIE',
      payload: { ...movie, dislikes: movie.dislikes - 1, isDisliked: false }
    };
  };
};
