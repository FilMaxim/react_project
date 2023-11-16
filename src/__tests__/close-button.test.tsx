import { render, screen, fireEvent } from '@testing-library/react';
import { CloseButton } from '../components/Button/close-button';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../components/Layuot/layout';
import { MainPage } from '../pages/Main';
import { DescriptionPerson } from '../components/Descripton/description';
import { Provider } from 'react-redux';
import { store } from '../store/store';



describe('CloseButton', () => {
  vi.mock('react-router-dom/hooks/useNavigate');

  test('CloseButton should render correctly', () => {
    render(
      <MemoryRouter>
        <CloseButton />
      </MemoryRouter>
    );
    const button = screen.getByTestId('close-button');
    expect(button).toBeInTheDocument();
  });

  test('Clicking the close button hides the component', async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={['/details/1']}>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/details/" element={<Layout />}>
                <Route index element={<MainPage />} />
                <Route path=":id" element={<DescriptionPerson />} />
              </Route>
            </Routes>
          </MemoryRouter>
        </Provider>

      );
    });
    await fireEvent.click(screen.getByTestId('close-button'));
    const page = screen.queryByTestId('desc-page')
    expect(page).not.toBeInTheDocument();
  });
})

