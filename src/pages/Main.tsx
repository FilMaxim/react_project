import React from 'react';
import styles from './main.module.scss';
import { Search } from '../components/search';
import { StarWarsCharacters } from '../components/persons';
import { SearchProvider } from '../context/search-context';

export const MainPage: React.FC = () => {
  return (
    <>
      <SearchProvider>
        <div className={styles.main}>
          <Search />
          <StarWarsCharacters />
        </div>
      </SearchProvider>
    </>
  );
};
