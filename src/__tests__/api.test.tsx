import { useEffect } from 'react';
import { render, waitFor } from '@testing-library/react';
import { SearchContext } from '../context/search-context';
import { useStarWarsAPI } from '../API/api';

describe('useStarWarsAPI', () => {
  test('should fetch data without search value', async () => {
    const mockData = {
      count: 10,
      results: [
        { name: 'Luke Skywalker' },
        { name: 'Darth Vader' },
        { name: 'Princess Leia' },
        { name: 'Han Solo' },
        { name: 'Chewbacca' },
        { name: 'Obi-Wan Kenobi' },
        { name: 'Yoda' },
        { name: 'R2-D2' },
        { name: 'C-3PO' },
        { name: 'Boba Fett' },
      ],
    };

    global.fetch = vi.fn().mockResolvedValueOnce({
      json: vi.fn().mockResolvedValueOnce(mockData),
    });

    const setData = vi.fn();
    const searchValue = '';

    const TestComponent = () => {
      const { isLoading, count } = useStarWarsAPI(1, 5);

      useEffect(() => {
        if (!isLoading) {
          setData(mockData.results.slice(0, 5));
        }
      }, [isLoading]);

      const searchContextValue = {
        searchValue: '',
        setData,
        setSearchValue: vi.fn(),
        data: [],
      };

      return (
        <SearchContext.Provider value={searchContextValue}>
          <div>{isLoading ? 'Loading...' : 'Data loaded!'}</div>
          <div>{count}</div>
        </SearchContext.Provider>
      );
    };

    render(<TestComponent />);

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith('https://swapi.py4e.com/api/people/?page=1');
      expect(setData).toHaveBeenCalledTimes(1);
    });
  });
});
