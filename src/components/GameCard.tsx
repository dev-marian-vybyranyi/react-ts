import type { Game } from "@/hooks/useGames";
import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import PlatformIvonList from "./PlatformIconList";
import CriticScore from "./CriditScore";
import getCropedImageUrl from "@/services/image-url";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";

interface GameCardProps {
  game: Game;
}

const GameCard = (props: GameCardProps) => {
  return (
    <Card.Root>
      <Image src={getCropedImageUrl(props.game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIvonList
            platforms={props.game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={props.game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          <Link to={"/games/" + props.game.slug}>{props.game.name}</Link>
          <Emoji rating={props.game.rating_top} />
        </Heading>
      </CardBody>
    </Card.Root>
  );
};

export default GameCard;
