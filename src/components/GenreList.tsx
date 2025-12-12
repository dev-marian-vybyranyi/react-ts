import useGenres, { type Genre } from "@/hooks/useGenres";
import getCropedImageUrl from "@/services/image-url";
import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";

interface GenreListProps {
  onselectGenre: (genre: Genre) => void;
  selectegGenre: Genre | null;
}

const GenreList = (props: GenreListProps) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Geners
      </Heading>
      <List.Root listStyle="none">
        {data.map((genre) => (
          <ListItem key={genre.id}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCropedImageUrl(genre.image_background)}
              />
              <Button
                onClick={() => props.onselectGenre(genre)}
                whiteSpace="normal"
                textAlign="left"
                fontWeight={
                  genre.id === props.selectegGenre?.id ? "bold" : "normal"
                }
                fontSize="md"
                variant="ghost"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
