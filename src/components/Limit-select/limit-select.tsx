import React from 'react';
import styles from './limit.module.scss';
import { CardLimitSelectProps } from '../../types';

export const LimitSelect: React.FC<CardLimitSelectProps> = ({ onChange, limit }) => {
  const options = [1, 2, 5, 10];

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(event.target.value);
    onChange(value);
  };

  return (
    <div className={styles.select_wrap}>
      <p className={styles.title_limit}>Количество карточек:</p>
      <select value={limit} className={styles.select} onChange={handleChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
