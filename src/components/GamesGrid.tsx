import { Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";

const GamesGrid = () => {
  const { games, error } = useGame();
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game, index) => (
          <li key={index}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GamesGrid;
