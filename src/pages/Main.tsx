import React from 'react';
import styles from '../styles/main.module.scss'
import { Search } from '@/components/Search/search';
import Persons from '@/components/Cards/cards';
import { InferGetServerSidePropsType } from 'next';
import { getServerSideProps } from '.';


export const MainPage: React.FC = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <div className={styles.main}>
        <Search />
        <Persons data={data} />
      </div>
    </>
  );
};

export default MainPage;
