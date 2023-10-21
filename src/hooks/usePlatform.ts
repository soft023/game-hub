// import{ useEffect, useState } from "react";
// import apiClient, { CanceledError } from "../services/api-client";
import useData from "./useData";
import { Genre } from "./useGenre";



export interface Platform {
    id: number;
    name: string;
    slug : string;  
  }

 const usePlatform = () => useData<Platform>('/platforms/lists/parents');

export default usePlatform;