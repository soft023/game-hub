import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGame";
import PlatFormIconList from "./PlatFormIconList";

interface GameProp {
  game: Game;
}

const GameCard = ({ game }: GameProp) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatFormIconList
          platforms={game.parent_platforms.map((plat) => plat.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;
