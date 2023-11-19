import React from 'react';
import styles from './limit.module.scss';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

export const LimitSelect: React.FC = () => {
  const options = [1, 2, 5, 10];
  const limitAPI = 10;
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const limit: number = searchParams.get('limit') ? Number(searchParams.get('limit')) : limitAPI;

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(event.target.value);
    const searchParams = new URLSearchParams(location.search);
    searchParams.set('limit', value.toString());
    searchParams.set('page', '1');
    navigate(`/?${searchParams.toString()}`);
  };

  return (
    <div className={styles.select_wrap}>
      <p className={styles.title_limit}>Количество карточек:</p>
      <select
        data-testid="combobox"
        value={limit}
        className={styles.select}
        onChange={handleChange}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
