import React, { useContext, useEffect } from 'react';
import { ErrorButton } from './Button/error-button';
import { useNavigate } from 'react-router';
import { SearchContext } from '../context/search-context';

export const Search: React.FC = () => {
  const searchContext = useContext(SearchContext);
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
    const value = event.target.value;
    searchContext.setSearchValue(value);
  };

  const handleValueClick = () => {
    if (searchContext.searchValue === '') {
      localStorage.removeItem('inputValue');
      const urlParams = new URLSearchParams();
      navigate(`/?${urlParams.toString()}`);
      return;
    }
    localStorage.setItem('inputValue', searchContext.searchValue);
    const urlParams = new URLSearchParams();
    urlParams.set('search', searchContext.searchValue);
    navigate(`/?${urlParams.toString()}`);
  };

  return (
    <div className="search-wrap">
      <input
        className="search"
        type="text"
        placeholder="Поиск..."
        value={searchContext.searchValue}
        onChange={handleValueChange}
      />
      <button onClick={handleValueClick}>Поиск</button>
      <ErrorButton />
    </div>
  );
};
