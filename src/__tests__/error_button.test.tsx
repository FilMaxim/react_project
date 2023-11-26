import { ErrorButton } from '@/components/Button/error-button';
import { render, screen } from '@testing-library/react';

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
