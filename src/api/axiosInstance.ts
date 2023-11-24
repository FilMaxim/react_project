import type { AxiosInstance } from 'axios'
import axios from 'axios'

/** axios инстанс */
export const axiosAPI: AxiosInstance = axios.create(
  Object.assign({
    baseURL: 'https://swapi.py4e.com/api/',
    withCredentials: false,
  })
)
