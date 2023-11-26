import React from 'react';
import { act, render, screen } from '@testing-library/react';
import { Pagination } from '../components/Pagination/pagination';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import createMockRouter from '@/test/createMockRouter';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';


describe('Pagination', () => {
  userEvent.setup();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  const router = createMockRouter({
    query: { page: '1', limit: '1' },
  });
  beforeEach(() => {
    act(() => {
      render(
        <RouterContext.Provider value={router}>
          <Pagination count={10} />
        </RouterContext.Provider>
      );
    });
  });

  test('updates the URL query parameter when the page changes', async () => {
    const pageNextButton = screen.getByTestId('page-next');
    await act(async () => {
      await userEvent.click(pageNextButton);
    });
    expect(router.query.page).toBe('1');
  });

  test('renders Pagination component correctly', () => {
    const router = createMockRouter({
      query: { page: '1' },
    });
    const { getByTestId } = render(
      <RouterContext.Provider value={router}>
        <Pagination count={10} />
      </RouterContext.Provider>
    );
  });
});
