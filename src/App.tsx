import './App.css';
import { DescriptionPerson } from './components/description-person';
import { Layout } from './components/Layuot/layout';
import { MainPage } from './pages/Main';
import { Route, Routes } from 'react-router-dom';

export const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/details/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path=":id" element={<DescriptionPerson />} />
        </Route>
        <Route path="*" element={<div>Страница не найдена</div>} />
      </Routes>
    </>
  );
};
