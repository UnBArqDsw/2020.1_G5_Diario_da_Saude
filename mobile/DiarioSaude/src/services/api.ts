import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.15.10:8080"
  //baseURL: "https://localhost:8080"
});

export default api;
