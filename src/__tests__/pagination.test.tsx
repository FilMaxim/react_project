import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { Pagination } from '../components/Pagination/pagination';
import { App } from '../App';

describe('Pagination', () => {
  test('updates the URL query parameter when the page changes', async () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Pagination count={10} />
      </BrowserRouter>
    );
    const pageNextButton = getByTestId('page-next');
    fireEvent.click(pageNextButton);
    expect(location.search).toBe('?page=2');
    const pageLastButton = getByTestId('page-last');
    fireEvent.click(pageLastButton);
    expect(location.search).toBe('?page=10');
    const pagePrevButton = getByTestId('page-prev');
    fireEvent.click(pagePrevButton);
    expect(location.search).toBe('?page=9');
    const page1Button = getByTestId('page-1');
    fireEvent.click(page1Button);
    expect(location.search).toBe('?page=1');
  });

  test('renders Pagination component correctly', () => {
    const count = 10;
    const { getByText } = render(
      <MemoryRouter>
        <Pagination count={count} />
      </MemoryRouter>
    );
    expect(getByText('1/10')).toBeInTheDocument();
  });
});
