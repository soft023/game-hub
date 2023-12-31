import{ useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client";
import useData from "./useData";
import genres from "../data/genres";


export interface Genre {
    id: number;
    name: string;
    image_background : string;  
  }
  // interface GenreProps {
  //   count: number;
  //   results: Genre[];
  // }
// const useGenre = () =>useData<Genre>("/genres");
const useGenre = () =>({data: genres, isLoading: false, error:null})
// const [genres, setGenres] = useState<Genre[]>([]);
// const [error, setErrors] = useState("");
// const [isLoading, setLoading] = useState(false);

// useEffect(() => {
//     // for cancelling request
//     const controller = new AbortController();
//     setLoading(true);

//     apiClient
//       .get<GenreProps>("/genres", {
//         signal: controller.signal,
//       }).then((res) => {
//         setGenres(res.data.results);
//         setLoading(false);
//       })
//       .catch((err) => {
//         if (err instanceof CanceledError) return;
//         setErrors(err.message);
//         setLoading(false);
//       });
//     return () => controller.abort();
//   }, []);

//   return {isLoading,genres,error};


export default useGenre;