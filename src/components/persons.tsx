import React, { useContext } from 'react';
import { Persone } from '../types';
import { Pagination } from './Pagination/pagination';
import { LimitSelect } from './Limit-select/limit-select';
import { Link, useSearchParams } from 'react-router-dom';
import { getId } from '../utils/get-id';
import { Loader } from './Loader/loader';
import { useStarWarsAPI } from '../API/api';
import { SearchContext } from '../context/search-context';

export const StarWarsCharacters = () => {
  const [searchParams] = useSearchParams();
  const searchContext = useContext(SearchContext);
  const pageCurrent: number = searchParams.get('page') ? Number(searchParams.get('page')) : 1;
  const limitCurrent: number = searchParams.get('limit') ? Number(searchParams.get('limit')) : 10;
  const { isLoading, count } = useStarWarsAPI(pageCurrent, limitCurrent);

  return (
    <div>
      <h1>Персонажи Звездных Войн</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {searchContext.data.length === 0 ? (
            <h2>Ничего не найдено 😟 </h2>
          ) : (
            <ul>
              {searchContext.data.map((character: Persone) => (
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
