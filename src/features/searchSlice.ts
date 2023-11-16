import { createSlice } from '@reduxjs/toolkit';
const valueLocalStorage = localStorage.getItem('inputValue');
const initialState = {
  searchValue: valueLocalStorage || '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export const { setSearch } = searchSlice.actions;
export default searchSlice.reducer;
