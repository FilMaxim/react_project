import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { Pagination } from '../components/Pagination/pagination';
import { App } from '../App';

describe('Pagination', () => {
  test('обновляет параметр запроса URL-адреса при изменении страницы', async () => {
    // Рендерим компонен
    const { getByTestId } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    // const pageNextButton = screen.getByTestId('page-next');

    fireEvent.click(getByTestId('page-next'));
    fireEvent.click(getByTestId('page-next'));

    // Проверяем, что параметр запроса URL-адреса обновлен
    expect(location.search).toBe('?page=1');

    // const searchParams2 = new URLSearchParams(location.search);
    // window.location.search = searchParams2.toString();
    // const page2 = searchParams2.get('?page=2');
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

  // it('The component updates URL query parameter when page changes', async () => {
  //   render(
  //     <MemoryRouter>
  //       <App />
  //     </MemoryRouter>
  //   );
  //   expect(location.search).toBe('');
  //   expect(await screen.findByTestId('page-next')).toBeInTheDocument();
  //   fireEvent.click(screen.getByTestId('page-next'));
  //   await screen.getByTestId('pagination');
  //   expect(location).toBe('?page=3');
  //   // fireEvent.click(screen.getByText('&gt;'));
  //   // await screen.findByTestId('page-next');
  //   // expect(location.search).toBe('?page=4');
  // });
});
