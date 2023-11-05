import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { MainPage } from '../../pages/Main';
import styles from './layout.module.scss';

export const Layout: React.FC = () => {
  const navigate = useNavigate();
  const handleCloseClick = () => {
    navigate(-1);
  };
  return (
    <div className={styles.layout}>
      <div className={styles.left} onClick={handleCloseClick}>
        <MainPage />
      </div>
      <div className={styles.right}>
        <Outlet />
      </div>
    </div>
  );
};
