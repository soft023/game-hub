import React from "react";
import useGenre from "../hooks/useGenre";
import GenreItem from "./GenreItem";

const GenreList = () => {
  const { isLoading, genres, error } = useGenre();
  return genres.map((gen) => <GenreItem genres={gen}></GenreItem>);
};
export default GenreList;
