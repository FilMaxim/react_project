import React, { Component } from 'react';
import { StarWarsCharactersState } from '../types';

interface StarWarsCharactersProps {
  value: string;
}

export class StarWarsCharacters extends Component<
  StarWarsCharactersProps,
  StarWarsCharactersState
> {
  constructor(props: StarWarsCharactersProps) {
    super(props);
    this.state = {
      characters: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    this.fetchData('');
  }

  componentDidUpdate(prevProps: StarWarsCharactersProps) {
    if (prevProps.value !== this.props.value) {
      this.fetchData(this.props.value);
    }
  }

  fetchData = async (value: string) => {
    console.log(value);
    this.setState({ isLoading: true });
    const date = localStorage.getItem('date');
    const searchPeople = date ? date : value.trim();

    try {
      const response = searchPeople
        ? await fetch(`https://swapi.dev/api/people/?search=${searchPeople}`)
        : await fetch(`https://swapi.dev/api/people/`);
      console.log(response);
      const data = await response.json();
      console.log(data);
      this.setState({ characters: data.results });
    } catch (error) {
      console.error('Ошибка при загрузке данных:', error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { characters, isLoading } = this.state;

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
                {characters.map((character) => (
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
  }
}
