import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { ErrorButton } from '../Button/error-button';


export const Search: React.FC = () => {
  const search = useSelector((state: RootState) => state.search.searchValue);
  const [value, setValue] = useState(search);
  const router = useRouter();

  useEffect(() => {
    if (search !== '') {
      const urlParams = new URLSearchParams();
      urlParams.set('search', search);
      router.push(`/?${urlParams.toString()}`);
    }
  }, [search]);

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valueCurrent = event.target.value;
    setValue(valueCurrent);
  };

  const handleValueClick = () => {
    if (value === '') {
      localStorage.removeItem('inputValue');
      const urlParams = new URLSearchParams();
      router.push(`/?${urlParams.toString()}`);
      setValue(value);
      const searchParams = new URLSearchParams(location.search);
      searchParams.set('page', '1');
      return;
    }
    setValue(value);
    localStorage.setItem('inputValue', value);
    const urlParams = new URLSearchParams();
    urlParams.set('search', value);
    router.push(`/?${urlParams.toString()}`);
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