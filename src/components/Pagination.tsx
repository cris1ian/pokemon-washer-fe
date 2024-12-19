import React from "react";

interface PaginationProps {
  offset: number;
  count: number;
  onPageChange: (url: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  offset,
  count,
  onPageChange,
}) => {
  const step = 12;

  const onPrevClick = () => {
    if (+(offset || 0) < 1) return;
    onPageChange(offset - step);
  };

  const onNextClick = () => {
    if (offset + step < count) return;
    onPageChange(offset + step);
  };

  return (
    <div className="flex justify-center items-center my-5">
      <button
        className="bg-blue-500 text-white font-bold  mx-4 py-2 px-4 rounded hover:bg-blue-600 min-w-40"
        disabled={offset === 0}
        onClick={onPrevClick}
      >
        Previous
      </button>
      <div className="font-bold text-l align-middle mx-4">
        {Math.ceil((offset + step) / count)} / {Math.ceil(count / step)}
      </div>
      <button
        className="bg-blue-500 text-white font-bold  mx-4 py-2 px-4 rounded hover:bg-blue-600 min-w-40"
        disabled={offset + step > count}
        onClick={onNextClick}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
