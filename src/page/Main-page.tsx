import React, { useState } from 'react';
import { Search } from '../components/search';
import { StarWarsCharacters } from '../components/persons';
import { ErrorButton } from '../components/error-button';

export const MainPage = () => {
  const [value, setValue] = useState('');

  const handleValueChange = (value: string) => {
    setValue(value);
  };

  return (
    <div>
      <Search onClick={handleValueChange} />
      <StarWarsCharacters value={value} />
      <ErrorButton />
    </div>
  );
};
