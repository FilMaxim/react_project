import React from 'react';

export class ErrorButton extends React.Component {
  handleClick = () => {
    throw new Error('Пример ошибки');
  };

  render() {
    return (
      <button className="btn-error" onClick={this.handleClick}>
        Выдать ошибку
      </button>
    );
  }
}
