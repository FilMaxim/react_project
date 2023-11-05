import React, { useState, useEffect } from 'react';
import { Persone } from '../types';
import { Pagination } from './Pagination/pagination';
import { LimitSelect } from './Limit-select/limit-select';
import { Link, useSearchParams } from 'react-router-dom';
import { getId } from '../utils/get-id';
import { Loader } from './Loader/loader';

export const StarWarsCharacters = () => {
  const limitAPI = 10;
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(1);
  const [searchParams] = useSearchParams();
  const pageCurrent: number = searchParams.get('page') ? Number(searchParams.get('page')) : 1;
  const limitCurrent: number = searchParams.get('limit')
    ? Number(searchParams.get('limit'))
    : limitAPI;

  const inputSearch: string = searchParams.get('search') ? String(searchParams.get('search')) : '';

  useEffect(() => {
    fetchData('');
  }, [pageCurrent, limitCurrent]);

  useEffect(() => {
    fetchData(inputSearch);
  }, [inputSearch]);

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
      setCharacters(slicedResults);
      setCount(Math.ceil(data.count / limitCurrent));
    } catch (error) {
      console.error('Ошибка при загрузке данных:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>Персонажи Звездных Войн</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {characters.length === 0 ? (
            <h2>Ничего не найдено 😟 </h2>
          ) : (
            <ul>
              {characters.map((character: Persone) => (
                <li className="item" key={character.url}>
                  <Link to={`/details/${getId(character.url)}?${searchParams.toString()}`}>
                    <div>Name: {character.name}</div>
                    <div>Birth year: {character.birth_year} </div>
                    <div>Gender: {character.gender} </div>
                    <div>Mass: {character.mass} kg</div>
                    <div>Height: {character.height} mm</div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
          <LimitSelect></LimitSelect>
          <Pagination count={count} />
        </div>
      )}
    </div>
  );
};
