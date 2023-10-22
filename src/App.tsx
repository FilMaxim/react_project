import { Component } from 'react';
import './App.css';
import { StarWarsCharacters } from './components/mainPage';

export class App extends Component {
  render() {
    return (
      <>
        <StarWarsCharacters />
      </>
    );
  }
}
