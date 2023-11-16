import { configureStore } from '@reduxjs/toolkit';
import { setCards } from '../features/cardsSlice';
import { Persone } from '../types';
import { store } from '../store/store';

describe('cardsSlice', () => {

  interface CardsState {
    cards: Persone[];
  }

  const initialState: CardsState = {
    cards: [],
  };

  test('setCards action should update the cards state', () => {
    const payload = ['card1', 'card2', 'card3'];
    const expectedState = {
      ...initialState,
      cards: payload,
    };

    store.dispatch(setCards(payload));
    expect(store.getState().cards.cards).toEqual(expectedState.cards);
  });
});
