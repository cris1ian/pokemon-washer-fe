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
      if (state.offset - state.step < 0) state.offset = 0;
      else state.offset -= state.step;
    },
    increment: (state, action: PayloadAction<number>) => {
      if (state.offset + state.step < action.payload)
        state.offset += state.step;
    },
    changeStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload;
    },
  },
});

export const { increment, decrement, changeStep } = paginationSlice.actions;
export default paginationSlice.reducer;
