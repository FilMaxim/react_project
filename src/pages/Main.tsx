import React from 'react';
import styles from './main.module.scss';
import { Search } from '../components/search';
import { StarWarsCharacters } from '../components/persons';

export const MainPage: React.FC = () => {
  return (
    <>
      <div className={styles.main}>
        <Search />
        <StarWarsCharacters />
      </div>
    </>
  );
};
