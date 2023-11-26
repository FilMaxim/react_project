import { DescriptionPerson } from '@/components/Description/description';
import { Layout } from '@/components/Layout/layout';
import createMockRouter from '@/test/createMockRouter';
import { act, render, screen } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import { vi } from 'vitest';


describe('Details', () => {
  it('should display the detailed info data correctly', async () => {

    const router = createMockRouter({
      query: { page: '1' },
    });
    await act(async () => {
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
    const details = screen.getByText(/Детали персонажа:/);
    expect(details).toBeInTheDocument();
    const birth = screen.getByText(/Eye Color: red/);
    expect(birth).toBeInTheDocument();
    afterAll(() => {
      vi.clearAllMocks();
    });
  })
})
