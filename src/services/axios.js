import axios from 'axios'

export const BaseUrl = 'https://clevara.id'

export const Instance = axios.create({
  baseURL: `${BaseUrl}/api/`,
  timeout: 10000,
});