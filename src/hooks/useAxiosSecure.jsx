"use client";

import { useEffect } from "react";
import useAuth from "./useAuth";

const { default: axios } = require("axios");

const axiosSecure = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DOMAIN,
});

export const useAxiosSecure = () => {
  const { user } = useAuth();
  useEffect(() => {
    const requestInterceptor = axiosSecure.interceptors.request.use(
      (config) => {
        config.headers.Authorization = `Bearer ${user?.accessToken}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    return () => {
      axios.interceptors.request.eject(requestInterceptor);
    };
  }, [user]);

  return axiosSecure;
};
