import { MemoryRouter } from "react-router-dom";
import { Layout } from "../components/Layuot/layout";
import { render, screen } from '@testing-library/react';

describe('App', () => {
  test('Layout component renders correctly', () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );
    const mainPageElement = screen.getByText(/Персонажи Звездных Войн/i);
    expect(mainPageElement).toBeInTheDocument();
  });
})
