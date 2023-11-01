import './App.css';
import { MainPage } from './page/MainPage';
import { ErrorButton } from './components/error-button';

export const App = () => {
  return (
    <div>
      <MainPage />
      <ErrorButton />
    </div>
  );
};
