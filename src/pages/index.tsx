import React from 'react';
import MainPage from './main';
import { Layout } from '@/components/Layout/layout';
import { wrapper } from '@/lib/store';
import { getRunningQueriesThunk, getsPeople } from '@/lib/peopleApi';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { Persone } from '@/types';

export interface Data {
  cards: Persone[],
  maxPage: Number,
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const { limit, page, search } = context.query;
    store.dispatch(getsPeople.initiate({
      limit: limit?.toString() || '10',
      page: page?.toString() || '1',
      search: search?.toString() || '',
    }));
    console.log('getServerSideProps')
    await Promise.all(store.dispatch(getRunningQueriesThunk()));
    return {
      props: {
        data: {
          cardsData: store.getState().cards.cards,
        }
      },
    };
  }
);

export default function Home({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(data)
  return (
    <div>
      {/* <MainPage data={data} /> */}

    </div>
  );
};

