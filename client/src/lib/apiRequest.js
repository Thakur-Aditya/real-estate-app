import axios from "axios";
const env = "production";
const apiRequest = axios.create({
  // baseURL: "http://localhost:8800/api",
  baseURL:
    env === "dev"
      ? "http://localhost:8800/api"
      : "https://real-estate-app-q2wd.onrender.com/api",

  withCredentials: true, //for cookies
});
export default apiRequest;
