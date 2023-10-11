import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGame";
import PlatFormIconList from "./PlatFormIconList";
import MetaCritic from "./MetaCritic";

interface GameProp {
  game: Game;
}

const GameCard = ({ game }: GameProp) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatFormIconList
            platforms={game.parent_platforms.map((plat) => plat.platform)}
          />
          <MetaCritic critic={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
