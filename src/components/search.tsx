import React, { useContext, useEffect, useState } from 'react';
import { ErrorButton } from './Button/error-button';
import { useNavigate } from 'react-router';
import { SearchContext } from '../context/search-context';

export const Search: React.FC = () => {
  const searchContext = useContext(SearchContext);
  const [value, setValue] = useState(searchContext.searchValue);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchContext.searchValue !== '') {
      const urlParams = new URLSearchParams();
      urlParams.set('search', searchContext.searchValue);
      console.log(urlParams.toString());
      navigate(`/?${urlParams.toString()}`);
    }
  }, []);

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valueCurrent = event.target.value;
    setValue(valueCurrent);
  };

  const handleValueClick = () => {
    if (value === '') {
      localStorage.removeItem('inputValue');
      const urlParams = new URLSearchParams();
      navigate(`/?${urlParams.toString()}`);
      setValue(value);
      searchContext.setSearchValue(value);
      return;
    }
    localStorage.setItem('inputValue', value);
    const urlParams = new URLSearchParams();
    urlParams.set('search', value);
    setValue(value);
    searchContext.setSearchValue(value);
    navigate(`/?${urlParams.toString()}`);
  };

  return (
    <div className="search-wrap">
      <input
        className="search"
        type="text"
        placeholder="Поиск..."
        value={value}
        onChange={handleValueChange}
      />
      <button onClick={handleValueClick}>Поиск</button>
      <ErrorButton />
    </div>
  );
};
