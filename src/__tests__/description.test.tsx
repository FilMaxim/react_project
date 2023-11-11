import { render, screen, act } from '@testing-library/react';
import { DescriptionPerson } from '../components/Descripton/description';
import { MemoryRouter } from 'react-router-dom';
import { CloseButton } from '../components/Button/close-button';

describe('DescriptionPerson', () => {
  it('should render the loading indicator when isLoading is true', () => {
    const { container } = render(
      <MemoryRouter>
        <DescriptionPerson />
      </MemoryRouter>
    );
    expect(container.querySelector('.loader')).toBeInTheDocument();
  });
  test('does not display detailed map component when characters state is null', () => {
    const { queryByText } = render(
      <MemoryRouter>
        <DescriptionPerson />
      </MemoryRouter>
    );
    expect(queryByText('Birth year:')).not.toBeInTheDocument();
    expect(queryByText('Gender:')).not.toBeInTheDocument();
    expect(queryByText('Mass:')).not.toBeInTheDocument();
    expect(queryByText('Heightй:')).not.toBeInTheDocument();
  });

  test('close button hides component', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <DescriptionPerson />
      </MemoryRouter>
    );

    const closeButton = getByTestId('close-button');
    closeButton.click();
  });
});
