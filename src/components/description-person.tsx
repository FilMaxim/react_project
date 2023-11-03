import { useParams } from 'react-router-dom';
import { CloseButton } from './Button/close-button';
import { useEffect, useState } from 'react';

import { getNameOfUrl } from '../utils/get-name-of-url';
import { Persone } from '../types';

export const DescriptionPerson: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState<Persone>();
  const [filmsArr, setFilmsArr] = useState<string[]>([]);
  const [starships, setStarships] = useState<string[]>([]);

  useEffect(() => {
    if (id) fetchData(id);
  }, [id]);

  const fetchData = async (id: string) => {
    setIsLoading(true);
    // https://swapi.py4e.com/
    try {
      const response = await fetch(`https://swapi.py4e.com/api/people/${id}`);
      const data = await response.json();
      setFilmsArr(await getNameOfUrl(data.films, 'title'));
      setStarships(await getNameOfUrl(data.starships, 'name'));
      setCharacters(data);
      console.log(data);
    } catch (error) {
      console.error('Ошибка при загрузке данных:', error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <CloseButton />
      <h2> Детали персонажа: {id}</h2>
      {isLoading ? (
        <div>
          <div className="loader"></div>
        </div>
      ) : (
        <div>
          {!characters ? (
            <h2>Ничего не найдено 😟 </h2>
          ) : (
            <div className="item" key={characters.url}>
              <div>Name: {characters.name}</div>
              <div>Birth year: {characters.birth_year} </div>
              <div>Name: {characters.name}</div>
              <div>Gender: {characters.gender} </div>
              <div>Mass: {characters.mass} kg</div>
              <div>Height: {characters.height} m</div>
              <div>Skin Color: {characters.skin_color} </div>
              <div>Hair Color: {characters.hair_color} </div>
              <div>Eye Color: {characters.eye_color} </div>
              {filmsArr.length !== 0 && (
                <div>
                  Films:
                  <ul>
                    {filmsArr.map((film: string) => (
                      <li key={film}>{film}</li>
                    ))}
                  </ul>
                </div>
              )}
              {starships.length !== 0 && (
                <div>
                  Starships:
                  <ul>
                    {starships.map((starship: string) => (
                      <li key={starship}>{starship}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};
