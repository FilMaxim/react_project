import React from 'react';
import { act, render, screen, fireEvent, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import { Search } from '@/components/Search/search';
import createMockRouter from '@/test/createMockRouter';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import userEvent from '@testing-library/user-event';


describe('Search', () => {
  userEvent.setup();
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('renders input and button', () => {
    const router = createMockRouter({
      query: { page: '1', limit: '1' },
    });
    render(
      <RouterContext.Provider value={router}>
        <Search />
      </RouterContext.Provider>
    );

    const input = screen.getByPlaceholderText('Поиск...');
    const button = screen.getByRole('button', { name: 'Поиск' });
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('updates input value on change', () => {
    const router = createMockRouter({
      query: { page: '1', limit: '1' },
    });
    render(
      <RouterContext.Provider value={router}>
        <Search />
      </RouterContext.Provider>
    );
    const input = screen.getByPlaceholderText('Поиск...');
    fireEvent.change(input, { target: { value: 'Luke Skywalker' } });
    expect(input).toHaveValue('Luke Skywalker');
  });
});
