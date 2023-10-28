import useData from "../hooks/useData";
import GenreItem from "./GenreItem";
import useGenre, { Genre } from "../hooks/useGenre";
import { Heading, Spinner } from "@chakra-ui/react";
import GenreSkeleton from "./GenreSkeleton";

interface Props {
  onSelectGenre: (gen: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { isLoading, data, error } = useGenre();
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
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      {isLoading &&
        skeGenre.map((ske, index) => (
          <GenreSkeleton key={index}>{ske}</GenreSkeleton>
        ))}

      {data.map((dat, index) => (
        <GenreItem
          key={index}
          genres={dat}
          selectedGenre={selectedGenre}
          onClickGenre={(dat) => onSelectGenre(dat)}
        ></GenreItem>
      ))}
    </>
  );
};
export default GenreList;
