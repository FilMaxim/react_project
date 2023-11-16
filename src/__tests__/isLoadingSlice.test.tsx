import { configureStore } from '@reduxjs/toolkit';
import { store } from '../store/store';
import { setIsLoading } from '../features/isLoadingSlice';

describe('isLoadingSlice', () => {

  const initialState = {
    isLoading: false,
  };

  test('setIsLoading action should update the isLoading state', () => {
    const payload = true;
    const expectedState = {
      ...initialState,
      isLoading: payload,
    };


    store.dispatch(setIsLoading(payload));
    expect(store.getState().isLoading.isLoading).toEqual(expectedState.isLoading);
  });
});
