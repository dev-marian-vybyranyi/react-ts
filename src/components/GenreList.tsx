import useGenres from "@/hooks/useGenres";
import getCropedImageUrl from "@/services/image-url";
import useGameQueryStore from "@/store";
import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const selectedGenraId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenraId = useGameQueryStore((s) => s.setGenreId);

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Geners
      </Heading>
      <List.Root listStyle="none">
        {data?.results.map((genre) => (
          <ListItem key={genre.id}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCropedImageUrl(genre.image_background)}
              />
              <Button
                onClick={() => setSelectedGenraId(genre.id)}
                whiteSpace="normal"
                textAlign="left"
                fontWeight={genre.id === selectedGenraId ? "bold" : "normal"}
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
