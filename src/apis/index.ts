import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { useUser } from "@/store";
import type { Result } from "@/types/code";
import { Code } from "@/enums";

const service = axios.create({
  baseURL: "",
  timeout: 200000,
});

service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const { token } = useUser();
    if (token) {
      config.headers.Authorization = "Bearer " + token;
    }
    return config;
  },
  (err) => {
    console.log(err);
    Promise.reject(err);
  }
);

service.interceptors.response.use(
  (res: AxiosResponse<Result>) => {
    console.log(res);
    const code = res?.data?.code;
    let msg: Code = Code[""];
    if (code === 200 || !code) {
      msg = Code["success"];
    } else {
      msg = Code["failed"];
      return Promise.reject(msg);
    }
    return res;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default service;
