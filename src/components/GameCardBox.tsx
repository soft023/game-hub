import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
interface SkeletonProps {
  children: ReactNode;
}

const GameCardBox = ({ children }: SkeletonProps) => {
  return (
    <Box borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardBox;
