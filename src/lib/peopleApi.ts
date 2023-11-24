import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { DataAPI } from '../types';
import { HYDRATE } from 'next-redux-wrapper';
import cardsSlice, { setCards } from './cardsSlice';

export const peopleApi = createApi({
  reducerPath: 'peopleApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.py4e.com/api/' }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  tagTypes: [],
  endpoints: (build) => ({
    getsPeople: build.query({
      query: ({ search = '', pageCurrent = 1, limitCurrent = 10 }) => {
        const page = Math.ceil((pageCurrent * limitCurrent) / 10);
        return `people?${page && `page=${page}`}&${search && `search=${search}`}`;
      },
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        try {
          const data = await queryFulfilled;
          dispatch(setCards(data));
        } catch (error) {
          console.error(error)
        }
      },
      transformResponse: (response: DataAPI, meta, { pageCurrent, limitCurrent }) => {
        const limitAPI = 10;
        const startIndex = ((pageCurrent - 1) * limitCurrent) % limitAPI;
        const endIndex = startIndex + limitCurrent;
        const slicedResults = response.results.slice(startIndex, endIndex);
        return {
          cards: slicedResults,
          maxPage: Math.ceil(response.count / limitCurrent),
        };

      },
    }),
    getDescription: build.query({
      query: (id) => `people/${id}`,
    }),
  }),
});

export const {
  useGetsPeopleQuery,
  useGetDescriptionQuery,
  util: { getRunningQueriesThunk },
} = peopleApi;

export const { getsPeople, getDescription } = peopleApi.endpoints;
