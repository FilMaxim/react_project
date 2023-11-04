import styles from './pagination.module.scss';

interface PaginationProps {
  pageCurrent: number;
  count: number;
  setPageCurrent: (value: number) => void;
}

export const Pagination = ({ pageCurrent, count, setPageCurrent }: PaginationProps) => {
  const handlePageClickPrev = () => {
    if (pageCurrent !== 1) setPageCurrent(pageCurrent - 1);
  };
  const handlePageClickNext = () => {
    if (pageCurrent !== count) setPageCurrent(pageCurrent + 1);
  };
  const handlePageClickOne = () => {
    setPageCurrent(1);
  };
  const handlePageClickLast = () => {
    setPageCurrent(count);
  };
  return (
    <div className={styles.pagination}>
      <div className={styles.btn_page} onClick={handlePageClickOne}>
        &lt;&lt;
      </div>
      <div className={styles.btn_page} onClick={handlePageClickPrev}>
        &lt;
      </div>
      <span className={styles.page_currrent}>
        {pageCurrent}/{count}
      </span>
      <div className={styles.btn_page} onClick={handlePageClickNext}>
        &gt;
      </div>
      <div className={styles.btn_page} onClick={handlePageClickLast}>
        &gt;&gt;
      </div>
    </div>
  );
};
