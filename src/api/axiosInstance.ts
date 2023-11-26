import type { AxiosInstance } from 'axios'
import axios from 'axios'

export const axiosAPI: AxiosInstance = axios.create(
  Object.assign({
    baseURL: 'https://swapi.py4e.com/api/',
    withCredentials: false,
  })
)
