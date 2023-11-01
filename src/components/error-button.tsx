import React from 'react';

export function ErrorButton() {
  const handleClick = () => {
    throw new Error('Пример ошибки');
  };

  return (
    <button className="btn-error" onClick={handleClick}>
      Выдать ошибку
    </button>
  );
}
