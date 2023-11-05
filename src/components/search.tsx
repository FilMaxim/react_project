import React, { useEffect, useState } from 'react';
import { ErrorButton } from './Button/error-button';
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';

export const Search: React.FC = () => {
  const navigate = useNavigate();
  const valueLocalStorage = localStorage.getItem('inputValue');
  const [searchParams] = useSearchParams();
  const inputValue = searchParams.get('inputValue')
    ? String(searchParams.get('inputValue'))
    : valueLocalStorage
    ? valueLocalStorage
    : '';
  const [searchValue, setSearchValue] = useState(inputValue);

  useEffect(() => {
    if (!searchParams.get('search') && valueLocalStorage) {
      const urlParams = new URLSearchParams();
      urlParams.set('search', valueLocalStorage);
      navigate(`/?${urlParams.toString()}`);
    }
  }, []);

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
  };

  const handleValueClick = () => {
    if (searchValue === '') {
      localStorage.removeItem('inputValue');
      const urlParams = new URLSearchParams();
      navigate(`/?${urlParams.toString()}`);
      return;
    }
    localStorage.setItem('inputValue', searchValue);
    const urlParams = new URLSearchParams();
    urlParams.set('search', searchValue);
    navigate(`/?${urlParams.toString()}`);
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
      <ErrorButton />
    </div>
  );
};
