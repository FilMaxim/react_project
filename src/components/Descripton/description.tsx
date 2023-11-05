import styles from './description.module.scss';
import { useParams } from 'react-router-dom';
import { CloseButton } from '../Button/close-button';
import { useEffect, useState } from 'react';
import { getNameOfUrl } from '../../utils/get-name-of-url';
import { Persone } from '../../types';
import { Loader } from '../Loader/loader';

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
    try {
      const response = await fetch(`https://swapi.py4e.com/api/people/${id}`);
      const data = await response.json();
      setFilmsArr(await getNameOfUrl(data.films, 'title'));
      setStarships(await getNameOfUrl(data.starships, 'name'));
      setCharacters(data);
    } catch (error) {
      console.error('Ошибка при загрузке данных:', error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <CloseButton />
      <h3> Детали персонажа: {characters ? characters.name : id}</h3>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.description}>
          {!characters ? (
            <h2>Ничего не найдено 😟 </h2>
          ) : (
            <>
              <p>Birth year: {characters.birth_year} </p>
              <p>Gender: {characters.gender} </p>
              <p>Mass: {characters.mass} kg</p>
              <p>Height: {characters.height} mm</p>
              <p>Skin Color: {characters.skin_color} </p>
              <p>Hair Color: {characters.hair_color} </p>
              <p>Eye Color: {characters.eye_color} </p>
              {filmsArr.length !== 0 && (
                <div>
                  <h3>Films:</h3>

                  <ul className={styles.list}>
                    {filmsArr.map((film: string) => (
                      <li key={film} className={styles.item}>
                        {film}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {starships.length !== 0 && (
                <div>
                  <h3>Starships:</h3>

                  <ul className={styles.list}>
                    {starships.map((starship: string) => (
                      <li key={starship} className={styles.item}>
                        {starship}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </>
  );
};