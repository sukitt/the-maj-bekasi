import axios from 'axios'

export const Instance = axios.create({
  baseURL: 'http://192.168.1.11:8000/api/',
  timeout: 1000,
});