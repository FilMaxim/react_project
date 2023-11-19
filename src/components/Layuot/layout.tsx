import React from 'react';
import { Outlet } from 'react-router-dom';
import { MainPage } from '../../pages/Main';
import styles from './layout.module.scss';
import { Popap } from '../Popap/popap';

export const Layout: React.FC = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.left}>
        <MainPage />
        <Popap />
      </div>
      <div className={styles.right}>
        <Outlet />
      </div>
    </div>
  );
};
