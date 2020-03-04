import axios from 'axios'

export const BaseUrl = 'http://192.168.1.11:8000'

export const Instance = axios.create({
  baseURL: `${BaseUrl}/api/`,
  timeout: 5000,
});