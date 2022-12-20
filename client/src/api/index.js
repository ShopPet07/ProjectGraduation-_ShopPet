import axios from "axios";

export const URL = "http://172.17.11.147:5000";

export const API = axios.create({ baseURL: `${URL}` });

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});
