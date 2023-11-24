import React from 'react';
import styles from './main.module.css'
import { Search } from '@/components/Search/search';
import Persons from '@/components/Cards/cards';
import { InferGetServerSidePropsType } from 'next';
import { getServerSideProps } from '../../pages';
import { ResultPeople } from '@/api/useFetchPeople';
import { Persone, Props } from '@/types';


export const MainPage = ({ data }: Props) => {
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
