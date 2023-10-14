import { Box, Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import GameCardBox from "./GameCardBox";

interface SkeletonProps {
  children: ReactNode;
}

const GameCardSkeleton = ({ children }: SkeletonProps) => {
  return (
    <GameCardBox>
      <Card>
        <Skeleton height="200px" />
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Card>
    </GameCardBox>
  );
};

export default GameCardSkeleton;
