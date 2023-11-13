import React from 'react';
import { render, screen } from '@testing-library/react';
import Hello from '../components/test';

test('render text', () => {
  render(<Hello />);
  expect(screen.getByText('Hello World')).toBeInTheDocument();
});
