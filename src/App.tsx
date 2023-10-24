import { Component } from 'react';
import './App.css';
import { MainPage } from './page/MainPage';
import { ErrorButton } from './components/errorButton';

export class App extends Component {
  state = {
    value: 'r2',
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
