import axios from "axios";

const axiosApiInstance = axios.create();
console.log(process.env.NODE_ENV);
const url =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000"
    : "https://superuser-api.onrender.com";

axiosApiInstance.defaults.baseURL = url;

export default axiosApiInstance;
