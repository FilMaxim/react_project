import { configureStore } from '@reduxjs/toolkit';
import { store } from '../store/store';
import { setSearch } from '../features/searchSlice';

describe('searchSlice', () => {
  const initialState = {
    searchValue: '',
  };

  test('setSearch action should update the searchValue state', () => {
    const payload = 'new search value';
    const expectedState = {
      ...initialState,
      searchValue: payload,
    };

    store.dispatch(setSearch(payload));
    expect(store.getState().search.searchValue).toEqual(expectedState.searchValue);
  });
});
