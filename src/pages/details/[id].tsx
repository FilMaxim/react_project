import React from 'react';
import styles from '../../styles/main.module.scss'
import { Search } from '@/components/Search/search';
import Persons from '@/components/Cards/cards';
import { Layout } from '@/components/Layout/layout';


export const MainPage: React.FC = () => {
  return (
    <>
      <div className={styles.main}>
        <Layout></Layout>
      </div>
    </>
  );
};

export default MainPage;
