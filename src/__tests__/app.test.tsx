import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { App } from '../App';

describe('App', () => {
  test('renders 404 page when navigating to an incorrect route', () => {
    const route = '/some-route';
    render(
      <MemoryRouter initialEntries={[route]}>
        <App />
      </MemoryRouter>
    );
    const notFoundElement = screen.getByText(/Страница не найдена/i);
    expect(notFoundElement).toEqual(expect.anything());
  });
});
