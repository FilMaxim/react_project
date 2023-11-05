import { useLocation, useNavigate } from 'react-router';
import styles from './pagination.module.scss';
import { useSearchParams } from 'react-router-dom';

interface PaginationProps {
  count: number;
}

export const Pagination = ({ count }: PaginationProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const pageCurrent: number = searchParams.get('page') ? Number(searchParams.get('page')) : 1;

  const handlePageChange = (page: number) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set('page', page.toString());
    navigate(`/?${searchParams.toString()}`);
  };

  return (
    <div className={styles.pagination}>
      <div className={styles.btn_page} onClick={() => handlePageChange(1)}>
        &lt;&lt;
      </div>
      <div
        className={styles.btn_page}
        onClick={() => handlePageChange(pageCurrent !== 1 ? pageCurrent - 1 : 1)}
      >
        &lt;
      </div>
      <span className={styles.page_currrent}>
        {pageCurrent}/{count}
      </span>
      <div
        className={styles.btn_page}
        onClick={() => handlePageChange(pageCurrent !== count ? pageCurrent + 1 : count)}
      >
        &gt;
      </div>
      <div className={styles.btn_page} onClick={() => handlePageChange(count)}>
        &gt;&gt;
      </div>
    </div>
  );
};
