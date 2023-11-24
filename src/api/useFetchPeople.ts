import {
  UseQueryResult,
  useQuery,
} from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { axiosAPI } from './axiosInstance'
import { DataAPI, Persone } from '@/types'

export interface ResultPeople {
  people: Persone[],
  maxPage: number
}

type GetPeopleProps = {
  page: number,
  limit: number,
  query?: any,
}

export const getPeople = async ({
  page,
  limit,
  query = {},
}: GetPeopleProps): Promise<ResultPeople> => {
  const { created, peopleId } = query
  const pageCurrent = Math.ceil((page * limit) / 10)
  const { data } = await axiosAPI.get<DataAPI>('people', {
    params: {
      ...Object.assign(
        { page: pageCurrent },
        created && { created },
        peopleId && { authorId: peopleId },
      ),
    },
  })
  const limitAPI = 10;
  const startIndex = ((page - 1) * limit) % limitAPI;
  const endIndex = startIndex + limit;
  const slicedResults = data.results.slice(startIndex, endIndex);
  return {
    people: slicedResults,
    maxPage: Math.ceil(data.count / limit),
  }
}

const useFetchPeople = ({
  page,
  limit,
}: GetPeopleProps): UseQueryResult<ResultPeople, Error> => {
  const { query } = useRouter()

  console.log('query', query)

  return useQuery({
    queryKey: ['people', Number(page), query],
    queryFn: () => getPeople({ page, limit, query }),
  })
}

export default useFetchPeople
