import { act, fireEvent, render, screen } from '@testing-library/react';
import { ErrorButton } from '../components/Button/error-button';

describe('ErrorButton', () => {
  test('render text', () => {
    render(<ErrorButton />);
    expect(screen.getByText('Выдать ошибку')).toBeInTheDocument();
  });
  test('render button', () => {
    render(<ErrorButton />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
