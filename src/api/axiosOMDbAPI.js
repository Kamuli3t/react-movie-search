import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = `https://www.omdbapi.com/`;

console.log(BASE_URL);

const axiosOMDbAPI = axios.create({
  baseURL: BASE_URL,
  params: { apikey: API_KEY },
  headers: { "Content-Type": "application/json" },
});

export default axiosOMDbAPI;
