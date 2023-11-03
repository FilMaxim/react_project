import React from 'react';

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
    <div className="pagination">
      <button onClick={handlePageClickOne}>&lt;&lt;</button>
      <button onClick={handlePageClickPrev}>&lt;</button>
      <span>{pageCurrent}</span>/<span>{count}</span>
      <button onClick={handlePageClickNext}>&gt;</button>
      <button onClick={handlePageClickLast}>&gt;&gt;</button>
    </div>
  );
};
