import axios from "axios";

const apiRequest = axios.create({
    // baseURL: "http://localhost:8800/api",
  baseURL: "https://real-estate-app-q2wd.onrender.com/api",

    
    withCredentials: true, //for cookies
})
export default apiRequest;