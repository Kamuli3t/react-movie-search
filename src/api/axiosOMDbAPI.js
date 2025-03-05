import axios from "axios";

const API_KEY = "98e3fb1f";
const BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

console.log(BASE_URL);

const axiosOMDbAPI = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

export default axiosOMDbAPI;
