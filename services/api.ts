import axios from "axios";

const API = axios.create({
  baseURL: "https://house-price-prediction-418u.onrender.com",
});

export default API;