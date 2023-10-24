import React from 'react';

interface SearchProps {
  onClick: (value: string) => void;
}

interface SearchState {
  searchValue: string;
}

export class Search extends React.Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    const date = localStorage.getItem('date');
    this.state = {
      searchValue: date ? date : '',
    };
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    this.setState({ searchValue: value });
    localStorage.setItem('date', value);
  };

  handleClick = () => {
    this.props.onClick(this.state.searchValue);
  };

  render() {
    return (
      <div className="search-wrap">
        <input
          className="search"
          type="text"
          placeholder="Search..."
          value={this.state.searchValue}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>Поиск</button>
      </div>
    );
  }
}
