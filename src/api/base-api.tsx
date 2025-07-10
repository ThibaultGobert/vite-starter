import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.thecatapi.com/v1/images",
  // withCredentials: true, // Send http-only cookie
});

export default axiosInstance;
