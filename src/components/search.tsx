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

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
  };

  const handleValueClick = () => {
    props.onClick(searchValue);
  };

  return (
    <div className="search-wrap">
      <input
        className="search"
        type="text"
        placeholder="Поиск..."
        value={searchValue}
        onChange={handleValueChange}
      />
      <button onClick={handleValueClick}>Поиск</button>
    </div>
  );
};
