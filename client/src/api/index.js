import axios from "axios";

export const URL = "http://192.168.1.23:5000";

export const API = axios.create({ baseURL: `${URL}` });

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});
