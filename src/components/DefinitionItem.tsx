import { Box, Heading } from "@chakra-ui/react";

interface DefinitionItemProps {
  term: string;
  children: React.ReactNode | React.ReactNode[];
}

const DefinitionItem = (props: DefinitionItemProps) => {
  return (
    <Box marginY={5}>
      <Heading as="dt" fontSize="md" color="gray.600">
        {props.term}
      </Heading>
      <dd>{props.children}</dd>
    </Box>
  );
};

export default DefinitionItem;
