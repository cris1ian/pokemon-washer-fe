import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { decrement, increment } from "../store/slices/paginationSlice";

interface PaginationProps {
  count: number;
}

const Pagination: React.FC<PaginationProps> = ({ count }) => {
  const step = useSelector((state: RootState) => state.pagination.step);
  const offset = useSelector((state: RootState) => state.pagination.offset);

  const dispatch = useDispatch();

  const onPrevClick = () => {
    if (offset < 1) return;
    dispatch(decrement());
  };

  const onNextClick = () => {
    console.log(offset + step, count);
    if (offset + step > count) return;
    dispatch(increment());
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
        {Math.ceil(offset / step) + 1} / {Math.ceil(count / step)}
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
