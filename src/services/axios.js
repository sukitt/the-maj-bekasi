import axios from 'axios'

export const BaseUrl = 'http://192.168.1.13:8000'

export const Instance = axios.create({
  baseURL: `${BaseUrl}/api/`,
  timeout: 10000,
});