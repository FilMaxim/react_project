import React from 'react';
import styles from '../../styles/main.module.scss'
import { Search } from '@/components/Search/search';
import Persons from '@/components/Cards/cards';
import { Layout } from '@/components/Layout/layout';
import { DataAPI, IData, Persone, Props } from '@/types';
import { useRouter } from 'next/router';
import MainPage from '../../components/MainPage/main';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

export interface IDataDet {
  people: Persone[];
  maxPage: number;
  details?: Persone;
}

export const Details = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      {data && data.details ? (
        <Layout data={data} />
      ) : (
        <p>Загрузка....</p>
      )}
    </>
  );
};

export default Details;

export const getServerSideProps = (async (context) => {
  const { page, limit, search, id } = context.query;
  const pageCurrent = page ? Number(page) : 1;
  const limitCurrent = limit ? Number(limit) : 10;

  const pageApi = Math.ceil((pageCurrent * limitCurrent) / 10);
  const res = await fetch(`https://swapi.py4e.com/api/people?${pageApi && `page=${pageApi}`}&${search && `search=${search}`}`);
  const cardsData: DataAPI = await res.json();
  const limitAPI = 10;
  const startIndex = (pageCurrent * limitCurrent) % limitAPI;
  const endIndex = startIndex + limitCurrent;
  const slicedResults = cardsData.results.slice(startIndex, endIndex);
  const resDet = await fetch(`https://swapi.py4e.com/api/people/${id}`);
  const details: Persone = await resDet.json();

  return {
    props: {
      data: {
        people: slicedResults,
        maxPage: Math.ceil(cardsData.count / limitCurrent),
        details: details,
      },
    },
  };
}) satisfies GetServerSideProps<{
  data: IDataDet;
}>;
