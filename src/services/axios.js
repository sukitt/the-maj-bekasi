import axios from 'axios'

const Clev = 'https://clevara.id'
const Local = 'http://localhost:8000'
const David = 'http://192.168.1.10:8000'
export const BaseUrl = Clev

export const Instance = axios.create({
  baseURL: `${BaseUrl}/api/`,
  timeout: 10000,
});