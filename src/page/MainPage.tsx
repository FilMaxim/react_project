import React, { Component } from 'react';
import { Search } from '../components/search';
import { StarWarsCharacters } from '../components/persons';

type Props = {
  callback: (value: string) => void;
  value: string;
};

type State = {
  value: string;
};

export class MainPage extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    this.setState({ value });
    this.props.callback(value);
  };

  render() {
    return (
      <div>
        <Search onClick={this.props.callback} />
        <StarWarsCharacters value={this.props.value} />
      </div>
    );
  }
}
