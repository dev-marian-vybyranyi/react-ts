import { Box } from "@chakra-ui/react"

interface GameCardContainerProps {
   children: React.ReactNode;
}
const GameCardContainer = (props: GameCardContainerProps) => {
  return (
    <Box borderRadius={10} overflow="hidden" width="300px">
        {props.children} 
    </Box>
  )
}

export default GameCardContainer