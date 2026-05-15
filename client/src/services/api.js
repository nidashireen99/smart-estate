import axios from "axios";

const API = axios.create({
  baseURL: "https://smart-estate-production.up.railway.app/api",
});

export default API;