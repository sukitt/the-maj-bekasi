import axios from 'axios'

const Clev = 'https://clevara.id'
const Tmg = 'https://backend.themajbekasi.com'
export const BaseUrl = Tmg

export const Instance = axios.create({
  baseURL: `${BaseUrl}/api/`,
  timeout: 20000,
});