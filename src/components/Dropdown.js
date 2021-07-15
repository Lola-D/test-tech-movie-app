import React from 'react';
import { useSelector } from 'react-redux';
import { FaCheck } from 'react-icons/fa';

import { categoriesSelector } from '../store/categoriesSelectors';
import './dropdown.css';

const Dropdown = ({ filteredCategories, handleClick }) => {
  const categories = useSelector(categoriesSelector);

  return (
    <div className='dropdown-container'>
      {
        categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleClick(cat)}
            className='dropdown-list-item'
          >
            {cat}
            {
              filteredCategories.includes(cat)
              && <FaCheck style={{ color: '#284d78' }} />
            }
          </button>
        ))
      }
    </div>
  );
};

export default Dropdown;
