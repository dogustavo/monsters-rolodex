import React from 'react';

const SearchBox = ({ placeholder, handleChange }) => (
    <input 
        type="search"
        className="search" 
        placeholder={placeholder}
        onChange={handleChange}
    />
)

export default SearchBox;