import React from 'react';
import MainPage from '../components/MainPage/main';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { DataAPI, IData, Persone } from '@/types';

export interface Data {
  cards: Persone[],
  maxPage: number,
}

export default function Home({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      {data && data.people ? (
        <MainPage data={data} />
      ) : (
        <p>Загрузка....</p>
      )}
    </>
  );
};

export const getServerSideProps = (async (context) => {
  const { page, limit, search, details: detailsId } = context.query;
  const pageCurrent = page ? Number(page) : 1;
  const limitCurrent = limit ? Number(limit) : 10;
  const pageApi = Math.ceil((pageCurrent * limitCurrent) / 10);
  const res = await fetch(`https://swapi.py4e.com/api/people?${pageApi && `page=${pageApi}`}&${search && `search=${search}`}`);
  const cardsData: DataAPI = await res.json();
  const limitAPI = 10;
  const startIndex = (pageCurrent * limitCurrent) % limitAPI;
  const endIndex = startIndex + limitCurrent;
  const slicedResults = cardsData.results.slice(startIndex, endIndex);
  return {
    props: {
      data: {
        people: slicedResults,
        maxPage: Math.ceil(cardsData.count / limitCurrent),
      },
    },
  };
}) satisfies GetServerSideProps<{
  data: IData;
}>;
