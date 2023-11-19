import React, { useEffect, useState } from 'react';
import { ErrorButton } from './Button/error-button';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '../features/searchSlice';
import { RootState } from '../store/store';

export const Search: React.FC = () => {
  const dispatch = useDispatch();
  const search = useSelector((state: RootState) => state.search.searchValue);
  const [value, setValue] = useState(search);
  const navigate = useNavigate();

  useEffect(() => {
    if (search !== '') {
      const urlParams = new URLSearchParams();
      urlParams.set('search', search);
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
      dispatch(setSearch(value));
      const searchParams = new URLSearchParams(location.search);
      searchParams.set('page', '1');
      return;
    }
    setValue(value);
    localStorage.setItem('inputValue', value);
    const urlParams = new URLSearchParams();
    urlParams.set('search', value);
    dispatch(setSearch(value));
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
