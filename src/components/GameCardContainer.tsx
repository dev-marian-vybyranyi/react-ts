import { Box } from "@chakra-ui/react";

interface GameCardContainerProps {
  children: React.ReactNode;
}
const GameCardContainer = (props: GameCardContainerProps) => {
  return (
    <Box
      _hover={{
        transform: "scale(1.03)",
        transition: "transform 0.15s ease-in",
      }}
      borderRadius={10}
      overflow="hidden"
    >
      {props.children}
    </Box>
  );
};

export default GameCardContainer;
