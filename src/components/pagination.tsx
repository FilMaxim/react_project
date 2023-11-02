import React from 'react';

interface PaginationProps {
  pageCurrent: number;
  count: number;
  handlePageClickPrev: () => void;
  handlePageClickNext: () => void;
  handlePageClickOne: () => void;
  handlePageClickLast: () => void;
}

export const Pagination = ({
  pageCurrent,
  count,
  handlePageClickPrev,
  handlePageClickNext,
  handlePageClickOne,
  handlePageClickLast,
}: PaginationProps) => {
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
