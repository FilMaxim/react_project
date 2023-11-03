/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Persone, StarWarsCharactersProps } from '../types';
import { Pagination } from './pagination';
import { LimitSelect } from './limit-select';
import { Link, useNavigate } from 'react-router-dom';
import { getId } from '../utils/get-id';

export const StarWarsCharacters = (props: StarWarsCharactersProps) => {
  const limitAPI = 10;
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pageCurrent, setPageCurrent] = useState(1);
  const [count, setCount] = useState(1);
  const [limit, setLimit] = useState(limitAPI);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData('');
  }, [pageCurrent, limit]);

  useEffect(() => {
    if (props.value !== '') {
      fetchData(props.value);
    }
  }, [props.value]);

  const fetchData = async (value: string) => {
    setIsLoading(true);
    const date = localStorage.getItem('date');
    const searchPeople = date ? date : value.trim();

    const calculatedPage = Math.ceil((pageCurrent * limit) / limitAPI);
    // https://swapi.py4e.com/
    try {
      const response = searchPeople
        ? await fetch(`https://swapi.dev/api/people/?search=${searchPeople}`)
        : await fetch(`https://swapi.py4e.com/api/people/?page=${calculatedPage}`);
      const data = await response.json();
      const startIndex = ((pageCurrent - 1) * limit) % limitAPI;
      const endIndex = startIndex + limit;
      const slicedResults = data.results.slice(startIndex, endIndex);
      setCharacters(slicedResults);
      searchPeople ? navigate(`?search=${searchPeople}`) : navigate(`?page=${pageCurrent}`);
      setCount(Math.ceil(data.count / limit));
    } catch (error) {
      console.error('Ошибка при загрузке данных:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangeLimit = (value: number) => {
    setLimit(value);
    setPageCurrent(1);
  };

  return (
    <div>
      <h1>Персонажи Звездных Войн</h1>
      {isLoading ? (
        <div>
          <div className="loader"></div>
        </div>
      ) : (
        <div>
          {characters.length === 0 ? (
            <h2>Ничего не найдено 😟 </h2>
          ) : (
            <ul>
              {characters.map((character: Persone) => (
                <li className="item" key={character.url}>
                  <Link to={`/details/${getId(character.url)}`}>
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
          <LimitSelect limit={limit} onChange={handleChangeLimit}></LimitSelect>
          <Pagination pageCurrent={pageCurrent} count={count} setPageCurrent={setPageCurrent} />
        </div>
      )}
    </div>
  );
};
