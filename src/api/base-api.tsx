import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com",
  // withCredentials: true, // Send http-only cookie
  // headers: { "Content-Type": "application/json" },
});

export default axiosInstance;
