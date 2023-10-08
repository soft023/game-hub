import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";

const GamesGrid = () => {
  const { games, error } = useGame();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 4, xl: 5 }}
        spacing={10}
        padding="10px"
      >
        {games.map((game, index) => (
          <GameCard game={game} key={index}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GamesGrid;
