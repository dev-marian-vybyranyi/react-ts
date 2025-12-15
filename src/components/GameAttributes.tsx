import type Game from "@/entities/Game";
import { SimpleGrid, Text } from "@chakra-ui/react";
import CriditScore from "./CriditScore";
import DefinitionItem from "./DefinitionItem";

interface GameAttributesProps {
  game: Game;
}

const GameAttributes = (props: GameAttributesProps) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <DefinitionItem term="Platforms">
        {props.game.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Metacritic Score">
        <CriditScore score={props.game.metacritic} />
      </DefinitionItem>
      <DefinitionItem term="Genres">
        {props.game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Publishers">
        {props.game.publishers?.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
