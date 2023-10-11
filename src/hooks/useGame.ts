import{ useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client";



export interface Platform {
id: number; 
name: string;
slug:string;

}
export interface Game {
    id: number;
    name: string;
    background_image : string;  
    parent_platforms : {platform : Platform}[];
    metacritic : number;
  }
  interface GameProps {
    count: number;
    results: Game[];
  }
const useGame = () =>{
const [games, setGames] = useState<Game[]>([]);
const [error, setErrors] = useState("");
const [isLoading, setLoading] = useState(false);

useEffect(() => {
    // for cancelling request
    const controller = new AbortController();
    setLoading(true);

    apiClient
      .get<GameProps>("/games", {
        signal: controller.signal,
      }).then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErrors(err.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, []);

  return {games,error};

}

export default useGame;