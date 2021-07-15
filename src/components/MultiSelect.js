import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

import { setFilterCategoriesAction } from '../store/filterActions';
import { filterCategoriesSelector } from '../store/filterSelectors';
import RemoveButton from './RemoveButton';
import Dropdown from './Dropdown';
import './multiselect.css';

const Multiselect = () => {
  const filteredCategories = useSelector(filterCategoriesSelector);
  const dispatch = useDispatch();
  const [dropdown, setDropdown] = useState(false);

  const selectCategory = (category) => {
    dispatch(setFilterCategoriesAction(category));
    setDropdown(false);
  };

  return (
    <div className='multiselect-container'>
      <div className='multiselect-select'>
        <div className='multiselect-tag-container'>
          {
            filteredCategories.length > 0
              ? filteredCategories.map((tag) => (
                <div key={tag} className='multiselect-tag-group'>
                  <p className='multiselect-tag'>{tag}</p>
                  <RemoveButton handleClick={() => dispatch(setFilterCategoriesAction(tag))} />
                </div>
              ))
              : <p className='multiselect-title'>Choisir une catégorie</p>
          }
        </div>
        <button
          onClick={() => setDropdown(!dropdown)}
          className='multiselect-open-dropdown'
        >
          {
            !dropdown
              ? <FaChevronDown style={{ color: '#284d78' }} />
              : <FaChevronUp style={{ color: '#284d78' }} />
          }
        </button>
      </div>
      {
        dropdown
          ? <Dropdown
            filteredCategories={filteredCategories}
            handleClick={selectCategory}
          />
          : null
      }
    </div>
  );
};

export default Multiselect;
