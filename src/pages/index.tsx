import React, { useState } from 'react';
import MainPage from './main';
import { Layout } from '@/components/Layout/layout';
import { wrapper } from '@/lib/store';
import { getRunningQueriesThunk, getsPeople, useGetsPeopleQuery } from '@/lib/peopleApi';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { DataAPI, IData, Persone } from '@/types';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import useFetchPeople, { getPeople } from '@/api/useFetchPeople';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { getId } from '@/utils/get-id';
import { Loader } from '@/components/Loader/loader';

export interface Data {
  cards: Persone[],
  maxPage: number,
}

// export const getServerSideProps: GetServerSideProps = async ({ query }) => {
//   const { page, limit, search } = query

//   const queryClient = new QueryClient()
//   try {
//     await Promise.all([
//       await queryClient.prefetchQuery({
//         queryKey: ['people', 1, {}],
//         queryFn: () => getPeople({ page: Number(page), limit: Number(limit) }),
//       }),
//     ])
//     const people = queryClient.getQueryData(['people', 1, {}])

//     // if (!people) {
//     //   return {
//     //     redirect: {
//     //       destination: '/404',
//     //       permanent: false,
//     //     },
//     //   }
//     // }

//     return {
//       props: {
//         dehydratedState: dehydrate(queryClient),
//       },
//     }
//   } catch (error) {
//     console.log(error)

//     return {
//       redirect: {
//         destination: '/404',
//         permanent: false,
//       },
//     }
//   }
// }

export default function Home({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  // const [page1, setPage] = useState<number>(1)
  // const { query } = useRouter()
  // const { page, limit, search } = query
  // const { data } = useFetchPeople({ page: Number(page), limit: Number(limit) })
  console.log(data.maxPage)
  return (
    <>
      {data && data.people ? (
        <MainPage data={data} />
      ) : (
        <Loader />
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
