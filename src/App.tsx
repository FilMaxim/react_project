import { Component } from 'react';
import './App.css';
import { MainPage } from './page/MainPage';
import { ErrorButton } from './components/error-button';

export class App extends Component {
  state = {
    value: '',
  };

  handleChange = (value: string) => {
    this.setState({ value });
  };

  render() {
    return (
      <div>
        <MainPage callback={this.handleChange} value={this.state.value} />
        <ErrorButton />
      </div>
    );
  }
}
