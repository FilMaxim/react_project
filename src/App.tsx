import './App.css';
import { MainPage } from './page/Main-page';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="*" element={<div>Страница не найдена</div>}></Route>
    </Routes>
  );
};
