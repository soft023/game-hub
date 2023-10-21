// import{ useEffect, useState } from "react";
// import apiClient, { CanceledError } from "../services/api-client";
import useData from "./useData";
import { Genre } from "./useGenre";



// export interface PlatformArray {
// id: number; 
// name: string;
// slug:string;
// gamecount:number;
// }
export interface Platform {
    id: number;
    name: string;
    slug : string;  
    // platforms : PlatformArray[];
  }

 const usePlatform = () => useData<Platform>('/platforms/lists/parents');



export default usePlatform;