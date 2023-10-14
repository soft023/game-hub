import{ useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client";



  interface DataProps <T>{
    count: number;
    results: T[];
  }


const useData = <T>(endpoint:string) =>{
const [data, setData] = useState<T[]>([]);
const [error, setErrors] = useState("");
const [isLoading, setLoading] = useState(false);

useEffect (() => {
    // for cancelling request
    const controller = new AbortController();
    setLoading(true);

    apiClient
      .get<DataProps<T>>(endpoint, {
        signal: controller.signal,
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
  }, []);

  return {isLoading,data,error};

}

export default useData;