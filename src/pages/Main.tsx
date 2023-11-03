import React, { useState } from 'react';
import styles from './main.module.scss';
import { Search } from '../components/search';
import { StarWarsCharacters } from '../components/persons';

export const MainPage: React.FC = () => {
  const [value, setValue] = useState('');

  const handleValueChange = (value: string) => {
    setValue(value);
  };

  return (
    <>
      <div className={styles.main}>
        <Search onClick={handleValueChange} />
        <StarWarsCharacters value={value} />
      </div>
    </>
  );
};
