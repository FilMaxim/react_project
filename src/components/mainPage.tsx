import React, { Component } from 'react';
import { StarWarsCharactersState } from '../types';

export class StarWarsCharacters extends Component<object, StarWarsCharactersState> {
  constructor(props: object) {
    super(props);
    this.state = {
      characters: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const response = await fetch('https://swapi.dev/api/people');
    const data = await response.json();
    this.setState({ characters: data.results });
  };

  render() {
    const { characters } = this.state;
    console.log(characters);

    return (
      <div>
        <h1>Персонажи Звездных Войн</h1>
        <ul>
          {characters.map((character) => (
            <li key={character.name}>{character.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
