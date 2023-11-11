import { render, screen, fireEvent } from '@testing-library/react';
import { Search } from '../components/search';
import { MemoryRouter } from 'react-router-dom';
import { App } from '../App';

describe('Search component', () => {
  it('сохраняет введенное значение в локальном хранилище при нажатии кнопки "Поиск"', () => {
    render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>
    );

    const searchInput = screen.getByPlaceholderText('Поиск...');
    const searchButton = screen.getByRole('button', { name: /поиск/i });

    fireEvent.change(searchInput, { target: { value: 'test value' } });
    fireEvent.click(searchButton);

    expect(localStorage.getItem('inputValue')).toBe('test value');
  });

  it('извлекает значение из локального хранилища при монтировании', () => {
    localStorage.setItem('inputValue', 'test value');

    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const searchInput = screen.getByPlaceholderText('Поиск...') as HTMLInputElement;

    expect(searchInput.value).toBe('test value');
  });
});
