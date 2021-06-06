import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "f334255a-dfeb-4e31-9b84-fcca1ea831c6",
  },
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});
export default instance;
