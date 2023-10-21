import{ useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client";
import { AxiosRequestConfig } from "axios";



  interface DataProps <T>{
    count: number;
    results: T[];
  }


const useData = <T>(endpoint:string, requestConfig?: AxiosRequestConfig, deps?:any[]) =>{
const [data, setData] = useState<T[]>([]);
const [error, setErrors] = useState("");
const [isLoading, setLoading] = useState(false);

useEffect (() => {
    // for cancelling request
    const controller = new AbortController();
    setLoading(true);

    apiClient
      .get<DataProps<T>>(endpoint, {
        signal: controller.signal,...requestConfig
      }).then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErrors(err.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, deps? [...deps]: []);

  return {isLoading,data,error};

}

export default useData;