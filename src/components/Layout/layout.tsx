import React from 'react';
import styles from './layuot.module.scss';
import { DescriptionPerson } from '../Description/description';
import MainPage from '@/pages/main';
import { Popap } from '../Popap/popap';

export const Layout: React.FC = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.left}>
        <MainPage />
        <Popap />
      </div>
      <div className={styles.right}>
        <DescriptionPerson />
      </div>
    </div>
  );
};
