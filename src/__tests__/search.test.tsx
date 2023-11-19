import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Search } from '../components/search';
import { Dispatch } from '@reduxjs/toolkit';
import { Mock, MockInstance } from 'vitest';

vi.mock('react-redux');
vi.mock('react-router');
vi.mock('react-redux', () => ({
  ...vi.importActual('react-redux'),
  useDispatch: vi.fn(),
  useSelector: vi.fn(),
}));

vi.mock('react-router', () => ({
  ...vi.importActual('react-router'),
  useNavigate: vi.fn(),
}));
describe('Search', () => {
  const mockDispatch = vi.fn();
  const mockNavigate = vi.fn();
  const mockSelector = vi.fn();

  beforeEach(() => {
    (useDispatch as Mock).mockReturnValue(mockDispatch);
    (useNavigate as Mock).mockReturnValue(mockNavigate);
    (useSelector as Mock).mockImplementation(
      (selector: (arg0: { search: { searchValue: string } }) => any) =>
        selector({
          search: {
            searchValue: mockSelector(),
          },
        })
    );
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('renders input and button', () => {
    render(<Search />);
    const input = screen.getByPlaceholderText('Поиск...');
    const button = screen.getByRole('button', { name: 'Поиск' });
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('updates input value on change', () => {
    render(<Search />);
    const input = screen.getByPlaceholderText('Поиск...');
    fireEvent.change(input, { target: { value: 'Luke Skywalker' } });
    expect(input).toHaveValue('Luke Skywalker');
  });

  test('dispatches setSearch and navigates on button click', () => {
    render(<Search />);
    const input = screen.getByPlaceholderText('Поиск...');
    const button = screen.getByRole('button', { name: 'Поиск' });
    fireEvent.change(input, { target: { value: 'r5' } });
    fireEvent.click(button);
    expect(mockDispatch).toHaveBeenCalledWith({ type: 'search/setSearch', payload: 'r5' });
    expect(mockNavigate).toHaveBeenCalledWith('/?search=r5');
  });

  test('removes search and navigates on button click with empty input', async () => {
    render(<Search />);
    const input = screen.getByPlaceholderText('Поиск...');
    const button = screen.getByRole('button', { name: 'Поиск' });
    fireEvent.change(input, { target: { value: '' } });
    fireEvent.click(button);
    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledWith({ type: 'search/setSearch', payload: undefined });
    });
  });
});
