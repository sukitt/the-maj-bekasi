import axios from 'axios'

export const BaseUrl = 'http://192.168.100.132:8000'

export const Instance = axios.create({
  baseURL: `${BaseUrl}/api/`,
  timeout: 5000,
});