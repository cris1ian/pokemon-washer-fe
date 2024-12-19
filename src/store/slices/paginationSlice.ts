import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PaginationState {
  offset: number;
  step: number;
}

const initialState: PaginationState = {
  offset: 0,
  step: 12,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    decrement: (state) => {
      state.offset = state.offset - state.step < 0 ? 0 : state.offset - state.step;
    },
    increment: (state) => {
      state.offset += state.step;
    },
    changeStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload;
    },
  },
});

export const { increment, decrement, changeStep } = paginationSlice.actions;
export default paginationSlice.reducer;
