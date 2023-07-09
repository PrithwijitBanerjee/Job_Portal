import axios from "axios";


export const axiosLocalInstance=axios.create({
    baseURL:process.env.REACT_APP_API_LOCAL_URL // accessing local json-server url
});

export const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
  });

export const axiosInstance2=axios.create({
    baseURL:process.env.REACT_APP_BASE_LIVE_BLOG_URL,
});  