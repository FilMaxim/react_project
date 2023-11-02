import React from 'react';
import { CardLimitSelectProps } from '../types';

export const LimitSelect: React.FC<CardLimitSelectProps> = ({ onChange, limit }) => {
  const options = [1, 2, 5, 10];

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(event.target.value);
    onChange(value);
  };

  return (
    <>
      <p>Выберите количество карточек на странице:</p>
      <select value={limit} onChange={handleChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
};
