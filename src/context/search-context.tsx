import { createContext, useState } from 'react';
import { Persone } from '../types';

interface SearchContextType {
  searchValue: string;
  setSearchValue: (value: string) => void;
  data: Persone[] | [];
  setData: (dataPer: Persone[]) => void;
}

export const SearchContext = createContext<SearchContextType>({
  searchValue: '',
  // eslint-disable-next-line prettier/prettier
  setSearchValue: () => { },
  data: [],
  // eslint-disable-next-line prettier/prettier
  setData: () => { },
});

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const valueLocalStorage = localStorage.getItem('inputValue');

  const [searchValue, setSearchValue] = useState(valueLocalStorage || '');
  const [data, setData] = useState<Persone[]>([]);

  return (
    <SearchContext.Provider
      value={{
        searchValue,
        setSearchValue,
        data,
        setData,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
