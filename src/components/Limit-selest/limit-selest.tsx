import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from './limit.module.css';

const LimitSelect = () => {
  const options = [1, 2, 5, 10];
  const limitAPI = 10;
  const router = useRouter();
  const [limit, setLimit] = useState(limitAPI);

  useEffect(() => {
    const { query } = router;
    const limitParam = query.limit ? Number(query.limit) : limitAPI;
    setLimit(limitParam);
  }, [router]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(event.target.value);
    const queryParams = { ...router.query, limit: value, page: '1' };
    router.push({
      pathname: router.pathname,
      query: queryParams,
    });
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

export default LimitSelect;
