import React from 'react';
import styles from './button.module.scss';

export const ErrorButton = () => {
  const handleClick = () => {
    throw new Error('Пример ошибки');
  };

  return (
    <button className={styles.btnerror} onClick={handleClick}>
      Выдать ошибку
    </button>
  );
};
