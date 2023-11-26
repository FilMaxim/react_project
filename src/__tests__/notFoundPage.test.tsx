import { act, render, screen } from '@testing-library/react';
import Page404 from '../pages/404';
import { useRouter } from 'next/router';
import createMockRouter from '@/test/createMockRouter';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import Home from '@/pages';
import { Layout } from '@/components/Layout/layout';

describe('404 Page', () => {
  it('renders NotFoundPage component when navigating to a non-existent page', () => {
    const router = createMockRouter({
      query: { page: '1' },
      basePath: '/test'
    });
    act(() => {
      render(
        <RouterContext.Provider value={router}>
          <Page404 />
        </RouterContext.Provider>
      );
    });
    const notFound = screen.getByText(/Страница не найдена/);
    expect(notFound).toBeInTheDocument();
  });
  it('renders details component when navigating to a non-existent page', () => {
    const router = createMockRouter({
      query: { page: '1' },
      basePath: '/details/1'
    });
    act(() => {
      render(
        <RouterContext.Provider value={router}>
          <Layout data={{
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
            }],
            maxPage: 0,
            details: {
              "height": "96",
              "name": "R2-D2",
              "mass": "32",
              "hair_color": "n/a",
              "skin_color": "white, blue",
              "eye_color": "red",
              "birth_year": "33BBY",
              "gender": "n/a",
              "url": "https://swapi.py4e.com/api/people/3/"
            }
          }} />
        </RouterContext.Provider>
      );
    });
    const notFound = screen.getByText(/Детали персонажа/);
    expect(router.basePath).toBe("/details/1");
  });
});
