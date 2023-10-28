import { SimpleGrid, Text } from "@chakra-ui/react";
import useData from "../hooks/useData";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import useGame, { Game } from "../hooks/useGame";
import { Genre } from "../hooks/useGenre";
import { Platform } from "../hooks/usePlatform";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
  // selectedGenre: Genre | null;
  // selectedPlatform: Platform | null;
}

const GamesGrid = ({ gameQuery }: Props) => {
  const { isLoading, data, error } = useGame(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing={6} padding="10px">
      {isLoading &&
        skeletons.map((skeleton, index) => (
          <GameCardSkeleton key={index}>{skeleton}</GameCardSkeleton>
        ))}
      {data.map((dat, index) => (
        <GameCard game={dat} key={index}></GameCard>
      ))}
    </SimpleGrid>
  );
};

export default GamesGrid;
