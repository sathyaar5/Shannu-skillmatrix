import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input className="drafts-child" placeholder="Drafts" type="text" />
      <div className="find-in-design">
        <input className="search" placeholder="Search" type="text" />
        <FaSearch />
      </div>
    </div>
  );
};

export default SearchBar;
