import axios from 'axios'

export const BaseUrl = 'https://192.168.1.10:8000'

export const Instance = axios.create({
  baseURL: `${BaseUrl}/api/`,
  timeout: 10000,
});