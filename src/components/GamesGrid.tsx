import { SimpleGrid, Text } from "@chakra-ui/react";
import useData from "../hooks/useData";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Game } from "../hooks/useGame";

const GamesGrid = () => {
  const { isLoading, data, error } = useData<Game>("/games");
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 4, xl: 5 }}
        spacing={3}
        padding="10px"
      >
        {isLoading &&
          skeletons.map((skeleton, index) => (
            <GameCardSkeleton key={index}>{skeleton}</GameCardSkeleton>
          ))}
        {data.map((dat, index) => (
          <GameCard game={dat} key={index}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GamesGrid;
