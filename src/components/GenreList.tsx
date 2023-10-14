import useData from "../hooks/useData";
import GenreItem from "./GenreItem";
import { Genre } from "../hooks/useGenre";
import { Spinner } from "@chakra-ui/react";
import GenreSkeleton from "./GenreSkeleton";

const GenreList = () => {
  const { isLoading, data, error } = useData<Genre>("/genres");
  const skeGenre = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // if (isLoading)
  //   return (
  //     <Spinner
  //       thickness="4px"
  //       speed="0.65s"
  //       emptyColor="gray.200"
  //       color="blue.500"
  //       size="xl"
  //     />
  //   );

  if (error) return null;

  return (
    <>
      {isLoading &&
        skeGenre.map((ske, index) => (
          <GenreSkeleton key={index}>{ske}</GenreSkeleton>
        ))}

      {data.map((dat, index) => (
        <GenreItem key={index} genres={dat}></GenreItem>
      ))}
    </>
  );
};
export default GenreList;
