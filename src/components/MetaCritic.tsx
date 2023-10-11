import { Badge } from "@chakra-ui/react";
import React from "react";

interface CriticProps {
  critic: number;
}

const MetaCritic = ({ critic }: CriticProps) => {
  let colorSch = critic > 89 ? "green" : "red";
  return (
    <Badge
      fontSize="14px"
      borderRadius="4px"
      paddingX={2}
      colorScheme={colorSch}
    >
      {critic}
    </Badge>
  );
};

export default MetaCritic;
