import useData from "../hooks/useData";
import GenreItem from "./GenreItem";
import { Genre } from "../hooks/useGenre";

const GenreList = () => {
  const { isLoading, data, error } = useData<Genre>("/genres");
  return data.map((dat, index) => (
    <GenreItem key={index} genres={dat}></GenreItem>
  ));
};
export default GenreList;
