import React from "react";

interface PaginationProps {
  step: number;
  offset: number;
  count: number;
  setOffset: (url: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  step,
  offset,
  count,
  setOffset,
}) => {
  const onPrevClick = () => {
    if (+offset < 1) return;
    setOffset(offset - step < 0 ? 0 : offset - step);
  };

  const onNextClick = () => {
    console.log(offset + step, count);
    if (offset + step > count) return;
    setOffset(offset + step);
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
        {Math.ceil(offset / step)} / {Math.ceil(count / step)}
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
