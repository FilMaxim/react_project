import React from 'react';

export class ErrorButton extends React.Component {
  handleClick = () => {
    throw new Error('Пример ошибки');
  };

  render() {
    return <button onClick={this.handleClick}>Генерировать ошибку</button>;
  }
}
