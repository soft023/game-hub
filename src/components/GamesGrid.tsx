import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GamesGrid = () => {
  const { isLoading, games, error } = useGame();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 4, xl: 5 }}
        spacing={10}
        padding="10px"
      >
        {isLoading &&
          skeletons.map((skeleton, index) => (
            <GameCardSkeleton key={index}>{skeleton}</GameCardSkeleton>
          ))}
        {games.map((game, index) => (
          <GameCard game={game} key={index}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GamesGrid;
