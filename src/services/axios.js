import axios from 'axios'

export const BaseUrl = 'http://127.0.0.1:8000'

export const Instance = axios.create({
  baseURL: `${BaseUrl}/api/`,
  timeout: 5000,
});