import { Persone } from '../types';
import { Pagination } from './Pagination/pagination';
import { LimitSelect } from './Limit-select/limit-select';
import { Link, useSearchParams } from 'react-router-dom';
import { getId } from '../utils/get-id';
import { Loader } from './Loader/loader';
import { useGetsPeopleQuery } from '../features/peopleApi';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const StarWarsCharacters = () => {
  const [searchParams] = useSearchParams();
  const limitAPI = 10;
  const pageCurrent: number = searchParams.get('page') ? Number(searchParams.get('page')) : 1;
  const limitCurrent: number = searchParams.get('limit')
    ? Number(searchParams.get('limit'))
    : limitAPI;
  const search = useSelector((state: RootState) => state.search.searchValue);
  //const dispatch = useDispatch();
  const { data, isLoading } = useGetsPeopleQuery({ search, pageCurrent, limitCurrent });
  //dispatch(setCards(data?.cards));
  //dispatch(setIsLoading(isLoading));
  // В onQueryStarted советую эту логику делать (в RTK query)

  return (
    <div>
      <h1>Персонажи Звездных Войн</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {data && data.cards.length === 0 ? (
            <h2>Ничего не найдено 😟 </h2>
          ) : (
            <ul>
              {data &&
                data.cards.map((character: Persone) => (
                  <li data-testid="link-card" className="item" key={character.url}>
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
          <Pagination count={data ? data.maxPage : 1} />
        </div>
      )}
    </div>
  );
};
