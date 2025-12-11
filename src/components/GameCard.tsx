import type { Game } from "@/hooks/useGames";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import PlatformIvonList from "./PlatformIvonList";

interface GameCardProps {
  game: Game;
}

const GameCard = (props: GameCardProps) => {
  return (
    <Card.Root borderRadius={10} overflow="hidden">
      <Image src={props.game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{props.game.name}</Heading>
        <PlatformIvonList
          platforms={props.game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card.Root>
  );
};

export default GameCard;
