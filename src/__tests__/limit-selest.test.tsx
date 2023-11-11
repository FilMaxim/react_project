import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { LimitSelect } from '../components/Limit-select/limit-select';

describe('LimitSelect', () => {
  const mockLocation = {
    search: '',
  };
  const mockNavigate = vi.fn();
  const mockSearchParams = {
    get: vi.fn(),
  };

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders without crashing', () => {
    render(
      <MemoryRouter>
        <LimitSelect />
      </MemoryRouter>
    );
  });

  it('sets the default value of the select element to the value of limit obtained from the search params', () => {
    mockSearchParams.get.mockReturnValue('5');
    const { getByRole } = render(
      <MemoryRouter>
        <LimitSelect />
      </MemoryRouter>
    );
    const selectElement = getByRole('combobox') as HTMLSelectElement;
    expect(selectElement.value).toBe('10');
  });

  it('changes the value of the select element when a new option is selected', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <LimitSelect />
      </MemoryRouter>
    );
    const selectElement = getByRole('combobox') as HTMLSelectElement;
    fireEvent.change(selectElement, { target: { value: '2' } });
    expect(selectElement.value).toBe('2');
  });
});
