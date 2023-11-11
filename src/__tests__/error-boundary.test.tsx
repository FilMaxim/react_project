import React from 'react';
import { render } from '@testing-library/react';
import { ErrorBoundary } from '../components/error-boundary';

describe('ErrorBoundary', () => {
  test('renders children when there are no errors', () => {
    const { getByText } = render(
      <ErrorBoundary>
        <div>Test</div>
      </ErrorBoundary>
    );
    expect(getByText('Test')).toBeInTheDocument();
  });
  test('renders an error message when there is an error', () => {
    const errorMessage = 'Something went wrong';
    const ErrorComponent = () => {
      throw new Error(errorMessage);
    };
    const { getByText } = render(
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>
    );
    expect(getByText('Что-то пошло не так. Пожалуйста, попробуйте еще раз.')).toBeInTheDocument();
  });
})

