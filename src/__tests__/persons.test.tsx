import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { StarWarsCharacters } from '../components/persons';
import { App } from '../App';
import { Provider } from 'react-redux';
import { store } from '../store/store';

describe('StarWarsCharacters', () => {
  test('renders Star Wars characters component', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    );
    const titleElement = screen.getByText(/Персонажи Звездных Войн/i);
    expect(titleElement).toBeInTheDocument();
  });
});
