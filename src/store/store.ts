import { configureStore } from '@reduxjs/toolkit';
import { peopleApi } from '../features/peopleApi';
import searchSlice from '../features/searchSlice';
import cardsSlice from '../features/cardsSlice';
import isLoadingSlice from '../features/isLoadingSlice';

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    search: searchSlice,
    cards: cardsSlice,
    isLoading: isLoadingSlice,
    [peopleApi.reducerPath]: peopleApi.reducer,
  },
  middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(peopleApi.middleware),
});
