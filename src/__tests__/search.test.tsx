import { render, screen, fireEvent } from '@testing-library/react';
import { Search } from '../components/search';
import { MemoryRouter } from 'react-router-dom';
import { App } from '../App';

describe('Search component', () => {
  it('saves the entered value in local storage when you click the "Search" button', () => {
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

  it('retrieves value from local storage when mounted', () => {
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
