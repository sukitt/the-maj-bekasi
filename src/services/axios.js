import axios from 'axios'

const Clev = 'https://clevara.id'
export const BaseUrl = Clev

export const Instance = axios.create({
  baseURL: `${BaseUrl}/api/`,
  timeout: 10000,
});