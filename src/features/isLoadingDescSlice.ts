import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoadingDesc: false,
};

export const isLoadingDescSlice = createSlice({
  name: 'isLoadingDesc',
  initialState,
  reducers: {
    setIsLoadingDesc: (state, action) => {
      state.isLoadingDesc = action.payload;
    },
  },
});

export const { setIsLoadingDesc } = isLoadingDescSlice.actions;
export default isLoadingDescSlice.reducer;
