import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { filteredMoviesSelector } from '../store/moviesSelectors';
import Card from './Card';
import './pagination.css';

const Pagination = () => {
  const data = useSelector(filteredMoviesSelector);
  const [dataLimit, setDataLimit] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const pageLimit = Math.ceil(data.length / dataLimit);

  const nextPage = () => {
    setCurrentPage((page) => page + 1);
  };

  const previousPage = () => {
    setCurrentPage((page) => page - 1);
  };

  const paginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  const changeDataLimit = (e) => {
    setDataLimit(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className='pagination-container'>
      <div className="pagination-card-container">
        {paginatedData().map((data) => (
          <Card
            key={data.id}
            movie={data}
          />
        ))}
      </div>
      <div className="pagination-buttons-container">
        <button
          onClick={previousPage}
          className='pagination-button'
          disabled={currentPage === 1}
        >
          prec.
        </button>
        <button
          onClick={nextPage}
          className='pagination-button'
          disabled={currentPage === pageLimit || data.length === 0}
        >
          suiv.
        </button>
        <select
          value={dataLimit}
          onChange={(e) => changeDataLimit(e)}
          className='pagination-data-limit'
        >
          <option value='4'>4</option>
          <option value='8'>8</option>
          <option value='12'>12</option>
        </select>
      </div>
    </div>
  );
};

export default Pagination;
