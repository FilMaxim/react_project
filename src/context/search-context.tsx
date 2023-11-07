import { createContext, useState } from 'react';

interface SearchContextType {
  searchValue: string;
  setSearchValue: (value: string) => void;
}
export const SearchContext = createContext<SearchContextType>({
  searchValue: '',
  // eslint-disable-next-line prettier/prettier
  setSearchValue: () => { },
});

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const valueLocalStorage = localStorage.getItem('inputValue');

  const [searchValue, setSearchValue] = useState(valueLocalStorage || '');
  return (
    <SearchContext.Provider
      value={{
        searchValue,
        setSearchValue,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
