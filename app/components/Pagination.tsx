import React from 'react';

interface PaginationProps {
  currentPage: string | null;
  previousPage: string | null;
  onPageChange: (url: string) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  previousPage,
  onPageChange,
}) => {
  return (
    <div>
      <button
        disabled={!previousPage}
        onClick={() => previousPage && onPageChange(previousPage)}
      >
        Previous
      </button>
      <button
        disabled={!currentPage}
        onClick={() => currentPage && onPageChange(currentPage)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
