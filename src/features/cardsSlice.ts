import { createSlice } from '@reduxjs/toolkit';
import { Persone } from '../types';

interface CardsState {
  cards: Persone[];
}

const initialState: CardsState = {
  cards: [],
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCards: (state, action) => {
      state.cards = action.payload;
      console.log(state.cards);
    },
  },
});

export const { setCards } = cardsSlice.actions;
export default cardsSlice.reducer;
