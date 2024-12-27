import axios from "axios";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_SERVERAPI}/api/v1/notice`,
});

export const getNotice = () => API.get("/getallnotice");
