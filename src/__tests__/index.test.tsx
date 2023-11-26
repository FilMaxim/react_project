import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import Persons from '@/components/Cards/cards';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import createMockRouter from '@/test/createMockRouter';
import userEvent from '@testing-library/user-event';
import Home from '@/pages';


describe('Home', () => {

  it('should render the MainPage component when data is available', async () => {
    const data = {
      people: [{ name: 'Luke Skywalker' }, { name: 'Darth Vader' }],
      maxPage: 10,
    };
    const router = createMockRouter({
      query: { page: '1', id: '123' },
    });

    render(
      <RouterContext.Provider value={router}>
        <Home data={{
          people: [{
            "height": "96",
            "name": "R2-D2",
            "mass": "32",
            "hair_color": "n/a",
            "skin_color": "white, blue",
            "eye_color": "red",
            "birth_year": "33BBY",
            "gender": "n/a",
            "url": "https://swapi.py4e.com/api/people/3/"
          }]
          ,
          maxPage: 0
        }} />
      </RouterContext.Provider>
    );
    const r2D2Element = screen.getByText(/R2-D2/);
    expect(r2D2Element).toBeInTheDocument;

    const linkElement = screen.getByRole('link');
    await waitFor(async () => {
      await userEvent.click(linkElement);
      expect(router.basePath).toBe('/');
    });

  });

  it('should render the Loader component when data is not available', () => {
    const data = null;

    const router = createMockRouter({
      query: { page: '1', limit: '10' },
    });

    render(
      <RouterContext.Provider value={router}>
        <Persons data={{
          people: [],
          maxPage: 0
        }} />
      </RouterContext.Provider>
    );
    const title = screen.getByText(/Персонажи Звездных Войн/);
    expect(title).toBeInTheDocument();
  });
});
