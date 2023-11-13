import { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../context/search-context';

export const useStarWarsAPI = (pageCurrent: number, limitCurrent: number) => {
  const limitAPI = 10;
  const searchContext = useContext(SearchContext);
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(1);

  useEffect(() => {
    fetchData('');
  }, [pageCurrent, limitCurrent]);

  useEffect(() => {
    fetchData(searchContext.searchValue);
  }, [searchContext.searchValue]);

  const fetchData = async (value: string) => {
    setIsLoading(true);
    const searchPeople = value.trim();
    const calculatedPage = Math.ceil((pageCurrent * limitCurrent) / limitAPI);
    try {
      const response = searchPeople
        ? await fetch(`https://swapi.py4e.com/api/people/?search=${searchPeople}`)
        : await fetch(`https://swapi.py4e.com/api/people/?page=${calculatedPage}`);
      const data = await response.json();

      const startIndex = ((pageCurrent - 1) * limitCurrent) % limitAPI;
      const endIndex = startIndex + limitCurrent;
      const slicedResults = data.results.slice(startIndex, endIndex);
      searchContext.setData(slicedResults);
      setCount(Math.ceil(data.count / limitCurrent));
    } catch (error) {
      console.error('Ошибка при загрузке данных:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, count };
};
