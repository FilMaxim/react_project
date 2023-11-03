import React, { useState } from 'react';
import { Search } from '../components/search';
import { StarWarsCharacters } from '../components/persons';
import { DescriptionPerson } from '../components/Descripton/description';

export const MainPage = () => {
  const [value, setValue] = useState('');

  const handleValueChange = (value: string) => {
    setValue(value);
  };

  return (
    <div>
      <Search onClick={handleValueChange} />
      <StarWarsCharacters value={value} />
      <DescriptionPerson />
    </div>
  );
};
