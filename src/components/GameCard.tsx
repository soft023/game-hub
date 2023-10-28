import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGame";
import PlatFormIconList from "./PlatFormIconList";
import MetaCritic from "./MetaCritic";
import imgCropper from "../services/img-cropper";
import GameCardBox from "./GameCardBox";
import Emoji from "./Emoji";

interface GameProp {
  game: Game;
}

const GameCard = ({ game }: GameProp) => {
  return (
    <GameCardBox>
      <Card>
        <Image src={imgCropper(game.background_image)}></Image>
        <CardBody>
          <HStack justifyContent={"space-between"} marginBottom={3}>
            <PlatFormIconList
              platforms={game.parent_platforms.map((plat) => plat.platform)}
            />
            <MetaCritic critic={game.metacritic} />
          </HStack>
          <Heading fontSize="2xl">
            {game.name}
            <Emoji ratings={game.rating_top} />
          </Heading>
        </CardBody>
      </Card>
    </GameCardBox>
  );
};

export default GameCard;
