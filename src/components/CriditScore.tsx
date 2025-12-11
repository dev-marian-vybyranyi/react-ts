import { Badge } from "@chakra-ui/react";

interface CriditScoreProps {
  score: number;
}

const CriditScore = (props: CriditScoreProps) => {
  const color = props.score > 75 ? "green" : props.score > 60 ? "yellow" : "red";
  
    return (
    <Badge color={color} fontSize="14px" paddingX={2} borderRadius="4px">
      {props.score}
    </Badge>
  );
};

export default CriditScore;
