import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com/users/1",
  // withCredentials: true, // Send http-only cookie
});

export default axiosInstance;
