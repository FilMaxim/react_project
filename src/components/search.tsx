import React, { useState, useEffect } from 'react';
import { SearchProps } from '../types';

export const Search: React.FC<SearchProps> = (props) => {
  const [searchValue, setSearchValue] = useState<string>(() => {
    const date = localStorage.getItem('date');
    return date ? date : '';
  });

  useEffect(() => {
    localStorage.setItem('date', searchValue);
  }, [searchValue]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
  };

  const handleClick = () => {
    props.onClick(searchValue);
  };

  return (
    <div className="search-wrap">
      <input
        className="search"
        type="text"
        placeholder="Поиск..."
        value={searchValue}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Поиск</button>
    </div>
  );
};
