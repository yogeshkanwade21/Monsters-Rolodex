import React from 'react';
import './search-box-styles.css';

const SearchBar = ({className, placeholder, onChangeHandler}) => {
  return (
    <input
        type='search'
        className={`search-box ${className}`}
        placeholder={placeholder}
        onChange={onChangeHandler}
    />

  )
}

export default SearchBar;