import axios from "axios";

const BASE_URL = "http://localhost:3000/";

// PUBLICO: LOGIN AND REFRESH
const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

// PRIVATE: PROTECTED ROUTES
export const apiPrivate = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export default api;
