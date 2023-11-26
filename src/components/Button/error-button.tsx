import React from 'react';
import styles from './button.module.css';

export const ErrorButton = () => {
  const handleClick = () => {
    try {
      throw new Error('Пример ошибки');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button className={styles.btnerror} onClick={handleClick}>
      Выдать ошибку
    </button>
  );
};
