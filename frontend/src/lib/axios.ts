import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://sendok-api.notchgnas.com/api",
});
