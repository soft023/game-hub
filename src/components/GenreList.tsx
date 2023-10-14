import useData from "../hooks/useData";
import GenreItem from "./GenreItem";
import { Genre } from "../hooks/useGenre";
import { Spinner } from "@chakra-ui/react";

const GenreList = () => {
  const { isLoading, data, error } = useData<Genre>("/genres");

  if (isLoading)
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    );

  if (error) return null;

  return data.map((dat, index) => (
    <GenreItem key={index} genres={dat}></GenreItem>
  ));
};
export default GenreList;
