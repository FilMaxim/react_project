import { useRouter } from 'next/router';
import styles from './pagination.module.css';
import { useEffect } from 'react';
import { Props } from '@/types';

interface PaginationProps {
  count: number;
}

export const Pagination = ({ count }: PaginationProps) => {
  const router = useRouter();
  const { query } = router;
  const pageCurrent: number = query.page ? Number(query.page) : 1;

  const handlePageChange = (page: number) => {
    const queryParams = { ...query, page: page.toString() };
    router.push({
      pathname: router.pathname,
      query: queryParams,
    });
  };

  useEffect(() => {
    const queryParams = { ...query, page: pageCurrent.toString() };
    router.push({
      pathname: router.pathname,
      query: queryParams,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageCurrent]);

  return (
    <div className={styles.pagination} data-testid="pagination">
      <div className={styles.btn_page} onClick={() => handlePageChange(1)} data-testid="page-1">
        &lt;&lt;
      </div>
      <div
        className={styles.btn_page}
        onClick={() => handlePageChange(pageCurrent !== 1 ? pageCurrent - 1 : 1)}
        data-testid="page-prev"
      >
        &lt;
      </div>
      <span className={styles.page_currrent}>
        {pageCurrent}/{count}
      </span>
      <div
        className={styles.btn_page}
        data-testid="page-next"
        onClick={() => handlePageChange(pageCurrent !== count ? pageCurrent + 1 : count)}
      >
        &gt;
      </div>
      <div
        className={styles.btn_page}
        onClick={() => handlePageChange(count)}
        data-testid="page-last"
      >
        &gt;&gt;
      </div>
    </div>
  );
};
