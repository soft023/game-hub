// import{ useEffect, useState } from "react";
// import apiClient, { CanceledError } from "../services/api-client";
import useData from "./useData";
import { Genre } from "./useGenre";
import platforms from "../data/platforms";



export interface Platform {
    id: number;
    name: string;
    slug : string;  
  }

 const usePlatform = () => ({data: platforms, isLoading: false, error:null});

export default usePlatform;