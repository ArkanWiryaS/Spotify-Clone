import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://sendok-api.notchgnas.com",
});
