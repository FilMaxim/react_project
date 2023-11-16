import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { DataAPI } from '../types';

export const peopleApi = createApi({
  reducerPath: 'peopleApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.py4e.com/api/' }),
  endpoints: (build) => ({
    getsPeople: build.query({
      query: ({ search = '', pageCurrent = 1, limitCurrent = 10 }) => {
        const page = Math.ceil((pageCurrent * limitCurrent) / 10);
        return `people?${page && `page=${page}`}&${search && `search=${search}`}`;
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

export const { useGetsPeopleQuery, useGetDescriptionQuery } = peopleApi;
