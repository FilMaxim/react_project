import React, { useState, useEffect } from 'react';
import { Persone, StarWarsCharactersProps } from '../types';

export const StarWarsCharacters = (props: StarWarsCharactersProps) => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData('');
  }, []);

  useEffect(() => {
    if (props.value !== '') {
      fetchData(props.value);
    }
  }, [props.value]);

  const fetchData = async (value: string) => {
    setIsLoading(true);
    const date = localStorage.getItem('date');
    const searchPeople = date ? date : value.trim();

    try {
      const response = searchPeople
        ? await fetch(`https://swapi.dev/api/people/?search=${searchPeople}`)
        : await fetch(`https://swapi.dev/api/people/`);
      const data = await response.json();
      setCharacters(data.results);
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
                <li className="item" key={character.name}>
                  <div>Name: {character.name}</div>
                  <div>Birth year: {character.birth_year} </div>
                  <div>Gender: {character.gender} </div>
                  <div>Mass: {character.mass} kg</div>
                  <div>Height: {character.height} m</div>
                  <div>Color: {character.skin_color} </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};
