import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { removeMovieAction, likeMovieAction, dislikeMovieAction } from '../store/moviesActions';
import RemoveButton from './RemoveButton';
import ProgressBar from './ProgressBar';
import Toggle from './Toggle';
import './card.css';

const Card = ({ movie }) => {
  const dispatch = useDispatch();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const totalVotes = (movie.likes + movie.dislikes);
    const ratio = movie.likes * 100 / totalVotes;
    setProgress(ratio);
  }, [movie.likes, movie.dislikes]);

  return (
    <div className='card-container'>
      <div className='card-background'>
        <div className='card-container-text'>
          <p className='card-title'>{movie.title}</p>
          <p className='card-category'>{movie.category}</p>
        </div>
        <div>
          <RemoveButton handleClick={() => dispatch(removeMovieAction(movie))} removeMovie />
          <ProgressBar progress={progress} />
          <div className='card-buttons-container'>
            <Toggle
              handleClick={() => dispatch(likeMovieAction(movie))}
              likes={movie.likes}
              isClicked={movie.isLiked}
            />
            <Toggle
              handleClick={() => dispatch(dislikeMovieAction(movie))}
              likes={movie.dislikes}
              isClicked={movie.isDisliked}
              dislike
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
