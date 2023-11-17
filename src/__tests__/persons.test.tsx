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

  test('renders error message when there is an error', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          < StarWarsCharacters />
        </MemoryRouter>
      </Provider>
    );
    await waitFor(() => {
      const errorMessage = screen.getByText(/Произошла ошибка на сервере!/i);
      expect(errorMessage).toBeInTheDocument();
    })
  });
})

