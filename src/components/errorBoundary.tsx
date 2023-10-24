import React, { ReactNode } from 'react';

export class ErrorBoundary extends React.Component<{ children: ReactNode }> {
  state = {
    hasError: false,
  };

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Произошла ошибка:', error, errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Что-то пошло не так. Пожалуйста, попробуйте еще раз.</h1>;
    }

    return this.props.children;
  }
}
